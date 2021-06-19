import SocialLink from "../ui/SocialLink/SocialLink";

function Footer({ isMainPage, isActive }) {
  return (
    <footer className={`footer ${isActive && isMainPage ? "footer_hide" : ''}`}>
      <div className="footer__container">
        <h3 className="footer__title footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__border" />
        <div className="footer__info">
          <ul className="footer__links">
            <SocialLink
              href="https://praktikum.yandex.ru/"
              title="Яндекс.Практикум"
              sectionClass="footer__text"
            />
            <SocialLink
              href="https://github.com/valeriiBorisenko"
              title="Github"
              sectionClass="footer__text"
            />
            <SocialLink
              href="https://career.habr.com/valeriiborisenko"
              title="Хабр.Карьера"
              sectionClass="footer__text"
            />
          </ul>
          <p className="footer__copyright footer__text">&copy;2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
