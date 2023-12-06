import styles from "./Banner.module.css"

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1 className={styles.titulo}>RESTAURANT</h1>
            <p className={subtitulo}>De pratos clássicos a criações surpeendentes, nosso cardápio é um requinte de sabores refinados</p>
        </section>
    )
}