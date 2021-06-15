import { moviesUrl, savedMoviesUrl } from '../../../utils/routes'
import NavItem from '../NavItem/NavItem'

function Navigation() {
  return(
    <div className="navigation">
      <button className="navigation__button-burger" />
      <div className="navigation__container_active">
        <button className="navigation__button-close" />
        <h3 className="navigation__title">Главная</h3>
        <ul className="navigation__list">
          <NavItem href={`${moviesUrl}`} linkText='Фильмы' />
          <NavItem href={`${savedMoviesUrl}`} linkText='Сохраненные фильмы' />
        </ul>
        <button className="navigation__button-account">
          <div className="navigation__button-icon"/>
          Аккаунт
        </button>
      </div>
    </div>
  )
}

export default Navigation;