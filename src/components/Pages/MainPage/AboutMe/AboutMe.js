import TitleH3 from "../ui/TitleH3/TitleH3"
import TitleH2 from "../ui/TitleH2/TitleH2";
import ParagraphMainPage from "../ui/ParagraphMainPage/ParagraphMainPage";
import avatar from "../../../../images/ValeriiBorisenko.png"

function AboutMe() {
  return (
    <section className="about-me">
      <div className="main-page__container">
        <TitleH3
          title="Студент"
          sectionClass="text-skin"
        />
        <div className="border" />
        <div className="about-me__container">
          <img class="about-me__image" src={avatar} alt="фотография стундента" />
          <TitleH2
            title="Валерий"
            sectionClass="about-me__title"
          />
          <ParagraphMainPage
            title="Фронтенд-разработчик, 28 лет"
            sectionClass="about-me__text"
          />
          <ParagraphMainPage
            title="Web-разработка для меня - это огромный пласт свободы, идей и новых технологий. Мне это нравится, это вдохновляет. Особенно, когда видишь, как меняются сайты, взаимодействие с ними и удобство их использования. Это и подтолкнуло меня к вэб программированию. Стартовой площадкой для меня стал Яндекс.Практикум с его программой «Вэб разработчик». Спринты, семинары и вебинары дали хорошую базу. В свободное время я люблю играть в настольные игры с друзьями. Предпочитаю wargame’ы и экономические стратегии. Если же в Петербурге когда-нибудь выглянет солнце, то я сниму со стены кастомный круизер-велосипед."
            sectionClass="about-me__text"
          />
          <ul className="about-me__links">
            <li>
              <a className="about-me__link link-opacity" href="https://career.habr.com/valeriiborisenko" target="_blank" rel="noreferrer">Хабр.Карьера</a>
            </li>
            <li>
              <a className="about-me__link link-opacity" href="https://github.com/valeriiBorisenko" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
