function PortfolioLink({ href, title }) {
  return (
    <li className="portfolio-link link-opacity">
      <a className="portfolio-link__item" href={href} target="_blank" rel="noreferrer">{title}
        <div className="portfolio-link__image" aria-label="стрелка повернутая" />
      </a>
    </li>
  )
}

export default PortfolioLink;
