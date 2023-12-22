import styles from "./Categorias.module.css"
import Image from "next/image"
import entradas from "../../../public/Assets/entrada.png"
import carnes from "../../../public/Assets/carne.png"
import saladas from "../../../public/Assets/salada.png"
import massas from "../../../public/Assets/massa.png"
import bebidas from "../../../public/Assets/bebidas.png"
import sobremesas from "../../../public/Assets/sobremesa.png"
import { useState } from "react"

export const Categorias = ({ onFiltrarPratosCategorias }) => {
    const [botaoSelecionado, setBotaoSelecionado] = useState("fotoBotao")

    const apertarBotao = (categoria) => {
        setBotaoSelecionado(categoria)
        onFiltrarPratosCategorias(categoria)
    }

    return (
        <section className={styles.areaBotoes}>
            <button onClick={() => apertarBotao("Entradas")}
            className={`${styles.botao} ${botaoSelecionado === "Entradas" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={entradas} />
                Entradas
            </button>
            <button onClick={() => apertarBotao("Carnes")}
            className={`${styles.botao} ${botaoSelecionado === "Carnes" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={carnes} />
                Carnes
            </button>
            <button onClick={() => apertarBotao("Saladas")}
            className={`${styles.botao} ${botaoSelecionado === "Saladas" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={saladas} />
                Saladas
            </button>
            <button onClick={() => apertarBotao("Massas")}
            className={`${styles.botao} ${botaoSelecionado === "Massas" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={massas} />
                Massas
            </button>
            <button onClick={() => apertarBotao("Bebidas")}
            className={`${styles.botao} ${botaoSelecionado === "Bebidas" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={bebidas} />
                Bebidas
            </button>
            <button onClick={() => apertarBotao("Sobremesas")}
            className={`${styles.botao} ${botaoSelecionado === "Sobremesas" ? styles.botaoS : ''}`}>
                <Image className={styles.fotoBotao} src ={sobremesas} />
                Sobremesas
            </button>
        </section>
    )
}