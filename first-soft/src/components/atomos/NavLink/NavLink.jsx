import './NavLink.css';

export const NavLink = ({ label, isActive, onClick }) => {
  return (
    <a href="#" className={`nav-link ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </a>
  );
};
