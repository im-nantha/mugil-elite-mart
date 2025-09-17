import { NavLink } from "react-router-dom";

const ReloadNavLink = ({ to, children, className, end }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Use relative path with basename
    const base = import.meta.env.PROD ? "/mugil-elite-mart" : "/mugil-elite-mart";
    window.location.href = `${base}${to}`;
  };

  return (
    <NavLink
      to={to} // needed for active styling
      end={end}
      className={className}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};

export default ReloadNavLink;