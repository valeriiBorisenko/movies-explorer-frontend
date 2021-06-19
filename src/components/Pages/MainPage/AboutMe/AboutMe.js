import TitleH3MainPage from "../ui/TitleH3MainPage/TitleH3MainPage"
import TitleH2MainPage from "../ui/TitleH2MainPage/TitleH2MainPage";
import ParagraphMainPage from "../ui/ParagraphMainPage/ParagraphMainPage";
import SocialLink from "../../../ui/SocialLink/SocialLink";
import avatar from "../../../../images/ValeriiBorisenko.png"

function AboutMe({ isActive }) {
  return (
    <section className={`about-me ${isActive ? "about-me_hide" : ''}`}>
      <div className="main-page__container">
        <TitleH3MainPage
          title="Студент"
          sectionClass="text-skin"
        />
        <div className="border" />
        <div className="about-me__container">
          <img class="about-me__image" src={avatar} alt="фотография стундента" />
          <TitleH2MainPage
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
            <SocialLink
              href="https://career.habr.com/valeriiborisenko"
              title="Хабр.Карьера"
              sectionClass="about-me__link"
            />
            <SocialLink
              href="https://github.com/valeriiBorisenko"
              title="Github"
              sectionClass="about-me__link"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
