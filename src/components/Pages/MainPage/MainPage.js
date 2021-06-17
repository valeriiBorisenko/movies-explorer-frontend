import Header from '../../Header/Header';
import MainHeader from '../../ui/MainHeader/MainHeader';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function MainPage() {
  return (
    <section className="main-page">
      <Header sectionClass="header_type_main">
        <div className="header__logo" />
        <MainHeader />
      </Header>
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>

    </section>
  )
};

export default MainPage;