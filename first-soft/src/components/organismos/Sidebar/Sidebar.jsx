import { Navigation } from '../../moleculas/Navigation/Navigation';
import './Sidebar.css';

export const Sidebar = ({ isOpen, links, activeLink, setActiveLink, toggleMenu }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Gestión</h2>
        <button className="close-btn" onClick={toggleMenu}>✕</button>
      </div>
      <Navigation 
        links={links} 
        activeLink={activeLink} 
        setActiveLink={setActiveLink} 
        onItemClick={toggleMenu}
      />
    </aside>
  );
};
