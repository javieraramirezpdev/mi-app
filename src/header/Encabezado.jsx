import styles from '.Header.module.css';

function Encabezado({ titulo }) {
    return (
        <header>
            <h1 className={styles.titulo}>{titulo}</h1>
        </header>
    );
}

export default Encabezado;