import TitleH3 from '../../../ui/TitleH3/TitleH3';
import TitleH2 from '../../../ui/TitleH2/TitleH2';
import ParagraphMainPage from '../../../ui/ParagraphMainPage/ParagraphMainPage'
import TechItem from '../../../ui/TechItem/TechItem';
import { techs } from '../../../../utils/constants';

function Techs() {
  return (
    <section className="techs">
      <div className="main-page__container">
        <TitleH3
          title="Технологии"
          sectionClass="text-skin"
        />
        <div className="border" />
        <div className="techs__conteiner">
          <TitleH2
            title="7 технологий"
            sectionClass="techs__title"
          />
          <ParagraphMainPage
            title="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."
            sectionClass="techs__text"
          />
          <div className="techs__items">
            {techs.map((item) =>
              <TechItem
                title={item}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techs;
