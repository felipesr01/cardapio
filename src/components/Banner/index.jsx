import styles from "./Banner.module.css"

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <h1 className={styles.titulo}>RESTAURANT</h1>
                <p className={styles.subtitulo}>De pratos clássicos a criações surpeendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </section>
    )
}