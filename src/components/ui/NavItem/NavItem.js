import { NavLink } from 'react-router-dom';

function NavItem({ href, linkText, onClick }) {
  return (
    <li className="navigation__link-container link-opacity">
      <NavLink
        className="navigation__link"
        activeClassName="navigation__link_active"
        to={href}
        onClick={onClick}
        exact={true}
      >
        {linkText}
      </NavLink>
    </li>
  )
}

export default NavItem;
