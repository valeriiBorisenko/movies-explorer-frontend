function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links-container">
          <li>
            <a className="portfolio__link link-opacity" href="https://valeriiborisenko.github.io/Kaktus/" target="_blank" rel="noreferrer">
              <p className="portfolio__text">Статичный сайт</p>
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
          <li>
            <a className="portfolio__link link-opacity" href="https://valeriiborisenko.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
              <p className="portfolio__text" >Адаптивный сайт</p>
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
          <li>
            <a className="portfolio__link link-opacity" href="https://mesto-valeriib.nomoredomains.rocks/" target="_blank" rel="noreferrer">
              <p className="portfolio__text">Одностраничное приложение</p>
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Portfolio