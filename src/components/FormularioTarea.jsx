import { useState } from 'react';

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    onAgregar(texto);
    setTexto('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;