import Header from '../../Header/Header';
import MainHeader from '../../ui/MainHeader/MainHeader';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

function MainPage() {
  return (
    <section className="main-page">
      <Header sectionClass="header_type_main">
        <div className="header__logo" />
        <MainHeader />
      </Header>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs /> 
      </main>

    </section>
  )
};

export default MainPage;