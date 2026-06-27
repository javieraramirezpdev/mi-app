import styles from './Header.module.css';
import Menu from './menu/Menu';

function Encabezado({ titulo }) {
  return (
    <header>
        <Menu></Menu>
        <h1 className={styles.titulo}>{titulo}</h1>
    </header>
  );
}

export default Encabezado;