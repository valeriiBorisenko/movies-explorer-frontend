import Navigation from "../ui/Navigation/Navigation";
import MainHeader from "../ui/MainHeader/MainHeader";

import { mainPageUrl } from "../../utils/routes";

function Header({ browserLocation }) {
  const location = browserLocation

  const mainLocation = location !== mainPageUrl ? "" : "header_type_main";
  const changeLocation = (location === mainPageUrl ?
    <MainHeader /> : '')

  return (
    <header className={`header ${mainLocation}`}>
      <div className="header__logo" />
        {changeLocation}
    </header>
  )
}

export default Header;