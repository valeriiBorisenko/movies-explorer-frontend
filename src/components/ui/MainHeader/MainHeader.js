import { Link } from "react-router-dom";
import { loginUrl, registerUrl } from "../../../utils/routes";

function MainHeader() {
  return (
    <ul className="main-header">
      <li>
        <Link className="main-header__link link-opacity" to={`${registerUrl}`}>Регистрация</Link>
      </li>
      <li>
        <Link to={loginUrl}>
          <button className="main-header__button link-opacity" type="button">Войти</button>
        </Link>
      </li>
    </ul>
  )
}

export default MainHeader;