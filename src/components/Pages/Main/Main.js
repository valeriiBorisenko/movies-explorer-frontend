import Header from '../../Header/Header';
import MainHeader from '../../ui/MainHeader/MainHeader';

function Main() {
  return(
    <section className="main">
      <Header sectionClass="header_type_main">
        <div className="header__logo" />
        <MainHeader/>
      </Header>
      
    </section>
  )
};

export default Main;