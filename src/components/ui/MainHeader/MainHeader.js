import { Link } from "react-router-dom";
import { registrationUrl } from "../../../utils/routes";
import Button from "../Button/Button"

function MainHeader() {
  return(
    <div className="main-header">
      <Link className="main-header__link link-opacity" to={`${registrationUrl}`}>Регистрация</Link>
      <Button 
        sectionClass="main-header"
        title='Войти'
      />
    </div>
  )
}

export default MainHeader;