import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/moleculas/FormField';
import Button from '../components/atomos/Button';

export default function AltaPersonal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: '', email: '', puesto: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardando empleado:', formData);
    alert(`¡${formData.nombre} dado de alta correctamente!`);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <h2>Dar de Alta Personal</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
        <FormField
          id="nombre"
          label="Nombre Completo"
          placeholder="Ej. Juan Pérez"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <FormField
          id="email"
          label="Correo Electrónico"
          type="email"
          placeholder="juan@empresa.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          id="puesto"
          label="Puesto / Rol"
          placeholder="Ej. Desarrollador Frontend"
          value={formData.puesto}
          onChange={handleChange}
          required
        />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <Button type="submit">Registrar Personal</Button>
          <Button onClick={() => navigate('/')} variant="secondary">Cancelar</Button>
        </div>
      </form>
    </div>
  );
}
