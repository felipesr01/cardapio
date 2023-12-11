import styles from "./Cards.module.css"
import Image from "next/image";


const Card = ({nome, categoria, preco, descricao, imagem}) => {
    return (
        <div className={styles.card}>
                <Image className={styles.foto} src={imagem} alt={nome}/>
            <div className={styles.areaTxt}>
                <h3 className={styles.nome}>{nome}</h3>
                <p className={styles.categoria}>{categoria}</p>
                <p className={styles.descricao}>{descricao}</p>
                <span className={styles.preco}>R${preco}</span>
            </div>
        </div>
    )
}

export default Card;