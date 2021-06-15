import { NavLink } from 'react-router-dom';

function NavItem({ href, linkText }) {
  return(
    <li>
      <NavLink
        className="navigation__link"
        activeClass="navigation__link_active"
        to={href}
      >
        {linkText}
      </NavLink>
    </li>
  )
}

export default NavItem;