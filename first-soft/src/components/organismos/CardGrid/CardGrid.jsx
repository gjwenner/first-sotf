import Card from '../moleculas/Card';
import './CardGrid.css';
export default function CardGrid() {
  const modules = [
    {
      id: 1,
      title: 'Alta de Personal',
      description: 'Registra nuevos empleados, asigna roles y configura sus datos básicos.',
      buttonText: 'Ir a Alta',
      linkTo: '/alta-personal'
    },
    {
      id: 2,
      title: 'Gestión de Tareas',
      description: 'Asigna, supervisa y actualiza el estado de las tareas del equipo.',
      buttonText: 'Ver Tareas',
      linkTo: '/gestion-tareas'
    }
  ];
  return (
    <div className="card-grid">
      {modules.map(module => (
        <Card key={module.id} {...module} />
      ))}
    </div>
  );
}
