import PortfolioLink from "./PotfolioLink/PortfolioLink"

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
          <PortfolioLink
            href="https://valeriiborisenko.github.io/Kaktus/"
            title="Статичный сайт"
          />
          <PortfolioLink
            href="https://valeriiborisenko.github.io/russian-travel/index.html"
            title="Адаптивный сайт"
          />
          <PortfolioLink
            href="https://mesto-valeriib.nomoredomains.rocks/"
            title="Одностраничное приложение"
          />
        </ul>
      </div>
    </section >
  )
}

export default Portfolio