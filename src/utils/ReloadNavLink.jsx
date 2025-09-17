import { NavLink } from "react-router-dom";

const ReloadNavLink = ({ to, children, className, end }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = to; // force reload
  };

  return (
    <NavLink
      to={to}
      end={end} // 🔹 make sure this is passed
      className={className}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};

export default ReloadNavLink;
