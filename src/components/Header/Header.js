import Navigation from "../ui/Navigation/Navigation";
import MainHeader from "../ui/MainHeader/MainHeader";

import { mainPageUrl, moviesUrl, profileUrl, savedMoviesUrl } from "../../utils/routes";

function Header({ browserLocation }) {
  const location = browserLocation

  const mainLocation = location !== mainPageUrl ? "" : "header_type_main";
  const changeLocation=
    (location === mainPageUrl ?
      <>
        <div className="header__logo" />
        <MainHeader />
      </> : '') ||
    (location === moviesUrl || savedMoviesUrl || profileUrl ?
      <>
        <div className="header__logo" />
        <Navigation />
      </> : '');
    
  return (
    <header className={`header ${mainLocation}`}>
      {changeLocation}
    </header>
  )
}

export default Header;