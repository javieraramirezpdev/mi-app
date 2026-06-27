import { useState } from 'react'
import './App.css'

// Componentes
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';
import Encabezado from './header/Encabezado';
import Footer from './footer/Footer';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, texto]);
  };

  return (
    <>
    <div>
      <Encabezado titulo="Mi Lista de Tareas" />
      <h1 className="titulo">Otro título h1</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} />
      <Footer></Footer>
    </div>
    </>
  )
}

export default App