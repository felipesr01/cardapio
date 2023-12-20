import styles from "./Categorias.module.css"
import Image from "next/image"
import entradas from "../../../public/Assets/entrada.png"
import carnes from "../../../public/Assets/carne.png"
import saladas from "../../../public/Assets/salada.png"
import massas from "../../../public/Assets/massa.png"
import bebidas from "../../../public/Assets/bebidas.png"
import sobremesas from "../../../public/Assets/sobremesa.png"

export const Categorias = (funcao) => {

    const handleFiltrarPratosCategoria = (categoria) => {
        setListaPratos(
          produtos.filter((prato) => prato.categoria === categoria)
        )
      }

    return (
        <section className={styles.areaBotoes}>
            <button onClick={() => handleFiltrarPratosCategoria(funcao.entradas)} className={styles.botao}>
                <Image className={styles.fotoBotao} src ={entradas} />
                Entradas
            </button>
            <button className={styles.botao}>
                <Image className={styles.fotoBotao} src ={carnes} />
                Carnes
            </button>
            <button className={styles.botao}>
                <Image className={styles.fotoBotao} src ={saladas} />
                Saladas
            </button>
            <button className={styles.botao}>
                <Image className={styles.fotoBotao} src ={massas} />
                Massas
            </button>
            <button className={styles.botao}>
                <Image className={styles.fotoBotao} src ={bebidas} />
                Bebidas
            </button>
            <button className={styles.botao}>
                <Image className={styles.fotoBotao} src ={sobremesas} />
                Sobremesas
            </button>
        </section>
    )
}