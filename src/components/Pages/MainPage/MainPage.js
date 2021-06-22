import Header from '../../Header/Header';
import MainHeader from './ui/MainHeader/MainHeader';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../../Footer/Footer';

import scrollDown from '../../../utils/srollDown'

function MainPage() {

  async function handleCickButton() {
    scrollDown()
  }

  return (
    <section className="main-page">
      <Header sectionClass="header_type_main">
        <div className="header__logo" aria-label="логотип страницы" />
        <MainHeader />
      </Header>
      <main className="main">
        <Promo
          onClick={handleCickButton}
        />
        <AboutProject
          id="about-project"
        />
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>

    </section>
  )
};

export default MainPage;