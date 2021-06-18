function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
          <li className="portfolio__link-container link-opacity">
            <a className="portfolio__link" href="https://valeriiborisenko.github.io/Kaktus/" target="_blank" rel="noreferrer">Статичный сайт
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
          <li className="portfolio__link-container link-opacity">
            <a className="portfolio__link" href="https://valeriiborisenko.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">Адаптивный сайт
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
          <li className="portfolio__link-container link-opacity">
            <a className="portfolio__link" href="https://mesto-valeriib.nomoredomains.rocks/" target="_blank" rel="noreferrer">Одностраничное приложение
              <div className="portfolio__image" aria-label="стрелка повернутая" />
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Portfolio