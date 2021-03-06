import PageLink from "../../ui/PageLink/PageLink";
import { MAIN_PAGE_URL } from "../../../utils/routes"

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__description">Страница не найдена</p>
      </div>
      <PageLink
        title="Назад"
        href={`${MAIN_PAGE_URL}`}
        sectionClass="page-not-found__link link-opacity"
      />
    </section>
  )
};

export default PageNotFound;