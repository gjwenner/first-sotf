import { NavLink } from '../../atomos/NavLink/NavLink';
import './Navigation.css';

export const Navigation = ({ links, activeLink, setActiveLink, onItemClick }) => {
  return (
    <nav className="navigation">
      {links.map((link) => (
        <NavLink
          key={link}
          label={link}
          isActive={activeLink === link}
          onClick={() => {
            setActiveLink(link);
            if (onItemClick) onItemClick(); // Cierra el menú en móvil
          }}
        />
      ))}
    </nav>
  );
};
