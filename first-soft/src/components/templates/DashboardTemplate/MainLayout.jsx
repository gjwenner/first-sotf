import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';
export default function MainLayout() {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <nav>
          <Link to="/" className="nav-logo">Dashboard Personal</Link>
        </nav>
      </header>
      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}
