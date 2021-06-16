import { useState } from 'react'

import { moviesUrl, savedMoviesUrl } from '../../../utils/routes'
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
    if (isMobileMenu) {
      setIsMobileMenu(false)
    }
  };

  const classNamesNavigation = [
    'navigation',
    (isMobileMenu ? "navigation_mobile" : "")
  ].join(' ').trim();

  return (
    <>
      <button className="navigation__button-burger" onClick={clickOpenMobileMenu} />
      <div className={classNamesNavigation}>
        <div className="navigation__container">
          <button className="navigation__button-close" onClick={closeMobileMenu} />
          <h3 className="navigation__title">Главная</h3>
          <ul className="navigation__list">
            <NavItem href={`${moviesUrl}`} linkText='Фильмы' onClick={handleCloseMobileMenu} />
            <NavItem href={`${savedMoviesUrl}`} linkText='Сохраненные фильмы' onClick={handleCloseMobileMenu} />
          </ul>
          <ButtonAccount onClick={handleCloseMobileMenu} />
        </div>
      </div>
    </>
  )
}

export default Navigation;
