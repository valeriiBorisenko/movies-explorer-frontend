import { Link } from "react-router-dom";

function PageLink({ title, children, href, sectionClass }) {
  return (
    <p className={`page-link ${sectionClass}`}>
      {children}
      <Link className="page-link page-link__name" to={href}>{title}</Link>
    </p>
  )
}

export default PageLink;
