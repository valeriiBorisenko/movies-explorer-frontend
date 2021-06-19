import { Link } from 'react-router-dom'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import Button from '../Button/Button'
import { loginUrl, registerUrl } from '../../../utils/routes'

function AuthUsers({
  title,
  children,
  buttonTitle,
  location,
  onSubmit }) {

  const changeLink =
    (location === loginUrl ?
      <p className="auth__text">Ещё не зарегистрированы? <Link className="auth__link link-opacity auth__text" to={registerUrl}>Регистрация</Link></p>
      : '') ||
    (location === registerUrl ?
      <p className="auth__text ">Уже зарегистрированы? <Link className="auth__link link-opacity auth__text" to={loginUrl}>Войти</Link></p>
      : '')

  return (
    <div className="auth">
      <div className="header__logo auth__logo" />
      <TitleH2
        title={title}
        sectionClass="text-skin"
      />
      <form className="auth__form" onSubmit={onSubmit} novalidate>
        <fieldset className="auth__form-container">
          {children}
        </fieldset>
        <div className="auth__button-container">
          <Button
            sectionClass="auth"
            title={buttonTitle}
            type="submit"
          />
          {changeLink}
        </div>
      </form>
    </div>
  )
}

export default AuthUsers;
