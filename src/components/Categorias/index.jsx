import styles from "./Categorias.module.css"

export const Categorias = () => {
    return (
        <section className={styles.areaBotoes}>
            <button className={styles.botao}>Entradas</button>
            <button className={styles.botao}>Carnes</button>
            <button className={styles.botao}>Saladas</button>
            <button className={styles.botao}>Massas</button>
            <button className={styles.botao}>Bebidas</button>
            <button className={styles.botao}>Sobremesas</button>
        </section>
    )
}