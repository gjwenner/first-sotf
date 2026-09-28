import { UserPerfil } from '../../moleculas/UserPerfil/UserPerfil';
import './TopBar.css';

export const TopBar = ({ title, user, toggleMenu }) => {
  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <button className="menu-btn" onClick={toggleMenu}>☰</button>
        <h1>{title}</h1>
      </div>
      <UserPerfil name={user} />
    </header>
  );
};
