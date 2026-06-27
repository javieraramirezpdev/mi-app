import ItemTarea from './ItemTarea';

function ListaTareas({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea, i) => (
        <ItemTarea key={i} texto={tarea} />
      ))}
    </ul>
  );
}

export default ListaTareas;