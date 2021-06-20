import TitleH3MainPage from '../ui/TitleH3MainPage/TitleH3MainPage';
import TitleH2MainPage from '../ui/TitleH2MainPage/TitleH2MainPage';
import ParagraphMainPage from '../ui/ParagraphMainPage/ParagraphMainPage'
import { techs } from '../../../../utils/constants';

function Techs({ isActive }) {
  return (
    <section className={`techs ${isActive ? "techs_hide" : ''}`}>
      <div className="main-page__container">
        <TitleH3MainPage
          title="Технологии"
          sectionClass="text-skin"
        />
        <div className="border" />
        <div className="techs__container">
          <TitleH2MainPage
            title="7 технологий"
            sectionClass="techs__title"
          />
          <ParagraphMainPage
            title="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."
            sectionClass="techs__text"
          />
          <div className="techs__items">
            {techs.map((item) =>
              <div className="tech__item" key={item.id}>{item.name}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techs;
