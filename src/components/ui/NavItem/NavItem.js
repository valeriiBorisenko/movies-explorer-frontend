import { NavLink } from 'react-router-dom';

function NavItem({ href, linkText }) {
  return(
    <li>
      <NavLink
        className="header__link"
        activeClass="header__link_active"
        to={href}
      >
        {linkText}
      </NavLink>
    </li>
  )
}

export default NavItem;