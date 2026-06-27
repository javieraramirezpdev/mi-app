import { useState } from 'react';
import styles from './Menu.module.css';

function Menu() {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>Mi Logo</div>

      <button className={styles.botonMenu} onClick={() => setAbierto(!abierto)}>
        {abierto ? 'Cerrar' : 'Abrir'} Menú
      </button>

      <ul className={`${styles.lista} ${abierto ? styles.listaAbierta : ''}`}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menu;