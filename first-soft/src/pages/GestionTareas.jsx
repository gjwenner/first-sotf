import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/moleculas/FormField';
import Button from '../components/atomos/Button';

export default function GestionTareas() {
  const navigate = useNavigate();
  const [tarea, setTarea] = useState({ titulo: '', asignadoA: '', fechaLimite: '' });

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Asignando tarea:', tarea);
    alert(`Tarea "${tarea.titulo}" asignada con éxito.`);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <h2>Asignar Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
        <FormField
          id="titulo"
          label="Título de la Tarea"
          placeholder="Ej. Diseñar Navbar Atómico"
          value={tarea.titulo}
          onChange={handleChange}
          required
        />
        <FormField
          id="asignadoA"
          label="Asignar a (Email del empleado)"
          type="email"
          placeholder="empleado@empresa.com"
          value={tarea.asignadoA}
          onChange={handleChange}
          required
        />
        <FormField
          id="fechaLimite"
          label="Fecha Límite"
          type="date"
          value={tarea.fechaLimite}
          onChange={handleChange}
          required
        />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <Button type="submit">Asignar Tarea</Button>
          <Button onClick={() => navigate('/')} variant="secondary">Volver</Button>
        </div>
      </form>
    </div>
  );
}
