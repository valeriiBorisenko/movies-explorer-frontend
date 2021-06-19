import PageLink from "../../ui/PageLink/PageLink";
import { mainPageUrl } from "../../../utils/routes"

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__description">Страница не найдена</p>
      </div>
      <PageLink
        title="Назад"
        href={`${mainPageUrl}`}
        sectionClass="page-not-found__link"
      />
    </section>
  )
};

export default PageNotFound;