import { Link } from 'react-router-dom'
import TitleH2 from '../../ui/TitleH2/TitleH2'
import Button from '../Button/Button'
import { LOGIN_URL, REGISTER_URL } from '../../../utils/routes'

function AuthUsers({
  title,
  children,
  buttonTitle,
  location,
  onSubmit,
  isValid,
  errorsApi,
  messageErrorApi
}) {

  const changeLink =
    (location === LOGIN_URL ?
      <p className="auth__text">Ещё не зарегистрированы? <Link className="auth__link link-opacity auth__text" to={REGISTER_URL}>Регистрация</Link></p>
      : '') ||
    (location === REGISTER_URL ?
      <p className="auth__text ">Уже зарегистрированы? <Link className="auth__link link-opacity auth__text" to={LOGIN_URL}>Войти</Link></p>
      : '')

  return (
    <div className="auth">
      <div className="header__logo auth__logo" />
      <TitleH2
        title={title}
        sectionClass="text-skin"
      />
      <form className="auth__form" onSubmit={onSubmit} noValidate>
        <fieldset className="auth__form-container">
          {children}
        </fieldset>
        <div className="auth__button-container">
        { errorsApi?
          <span className="auth__error">{messageErrorApi}</span> : ''
        }
          <Button
            sectionClass={`auth ${!isValid? 'button__invalid' : ''}`}
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
