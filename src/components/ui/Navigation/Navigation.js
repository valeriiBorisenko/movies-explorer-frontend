import { useState } from 'react'

import { MAIN_PAGE_URL, MOVIES_URL, SAVED_MOVIES_URL } from '../../../utils/routes'
import NavItem from '../NavItem/NavItem'
import ButtonAccount from '../ButtonAccount/ButtonAccount'

function Navigation() {

  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function clickOpenMobileMenu() {
    setIsMobileMenu(true);
  }

  function closeMobileMenu() {
    setIsMobileMenu(false);
  }

  function handleCloseMobileMenu() {
      setIsMobileMenu(!isMobileMenu)
  };

  const classNamesNavigation = [
    'navigation',
    (isMobileMenu ? "navigation_mobile" : "")
  ].join(' ').trim();

  return (
    <>
      <button className="navigation__button-burger link-opacity" onClick={clickOpenMobileMenu} />
      <div className={classNamesNavigation}>
        <div className="navigation__container">
          <button className="navigation__button-close link-opacity" onClick={closeMobileMenu} />
          <ul className="navigation__list">
            <NavItem href={`${MAIN_PAGE_URL}`} linkText='Главная' onClick={handleCloseMobileMenu} />
            <NavItem href={`${MOVIES_URL}`} linkText='Фильмы' onClick={handleCloseMobileMenu} />
            <NavItem href={`${SAVED_MOVIES_URL}`} linkText='Сохраненные фильмы' onClick={handleCloseMobileMenu} />
          </ul>
          <ButtonAccount onClick={handleCloseMobileMenu} />
        </div>
      </div>
    </>
  )
}

export default Navigation;
