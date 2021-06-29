import { NavLink } from 'react-router-dom';

function ButtonAccount({ onClick }) {
  return (
    <NavLink
      className="button-account link-opacity"
      activeClassName="button-account__icon_active"
      to="/profile"
      onClick={onClick}
    >
      <div className="button-account__icon" />
      Аккаунт
    </NavLink>
  )
}

export default ButtonAccount;
