import { useState } from 'react';
import { Sidebar } from './components/organismos/Sidebar/Sidebar';
import { TopBar } from './components/organismos/TopBar/TopBar';
//   import { Card } from './components/atomos/Card/Card';
import { DashboardTemplate } from './components/templates/DashboardTemplate/DashboardTemplate';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Inicio');

  const links = ['Inicio', 'Reservas', 'Finanzas', 'Productos', 'Reportes', 'Personal'];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <DashboardTemplate
      sidebar={
        <Sidebar
          isOpen={isMenuOpen}
          links={links}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          toggleMenu={toggleMenu}
        />
      }
      topbar={
        <TopBar 
          title="Bienvenido, Administrador" 
          user="Perfil" 
          toggleMenu={toggleMenu} 
        />
      }
    >
      {/* Contenido dinámico (Cards) */}
      {/*<Card title="Usuarios Activos" value="1,245" />
      <Card title="Ventas del Día" value="$12,300" /> */}
    </DashboardTemplate>  );
}

export default App;
