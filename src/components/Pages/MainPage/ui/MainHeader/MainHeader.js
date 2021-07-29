import { Link } from "react-router-dom";
import { LOGIN_URL, REGISTER_URL } from "../../../../../utils/routes";

function MainHeader() {
  return (
    <ul className="main-header">
      <li>
        <Link className="main-header__link link-opacity" to={`${REGISTER_URL}`}>Регистрация</Link>
      </li>
      <li>
        <Link to={LOGIN_URL}>
          <button className="main-header__button link-opacity" type="button">Войти</button>
        </Link>
      </li>
    </ul>
  )
}

export default MainHeader;