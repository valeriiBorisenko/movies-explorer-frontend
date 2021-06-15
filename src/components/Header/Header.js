import Navigation from "../ui/Navigation/Navigation";
import MainHeader from "../ui/MainHeader/MainHeader";

import { mainPageUrl, moviesUrl, profileUrl, savedMoviesUrl } from "../../utils/routes";

function Header({ browserLocation }) {
  const location = browserLocation

  const mainLocation = location !== mainPageUrl ? "" : "header_type_main";
  const changeLocation = 
  (location === mainPageUrl ?
    <MainHeader /> : '') ||
  (location === moviesUrl || location === savedMoviesUrl || location === profileUrl ?
    <Navigation /> : '');

  return (
    <header className={`header ${mainLocation}`}>
      <div className="header__logo" />
        {changeLocation}
    </header>
  )
}

export default Header;