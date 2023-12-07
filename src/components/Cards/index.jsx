import styles from "./Cards.module.css"
import Image from "next/image";


const Card = ({nome, categoria, preco, descricao, imagem}) => {
    return (
        <div className={styles.card}>
                <Image src={imagem} alt={nome}/>
            <div>
                <h3>{nome}</h3>
                <p>{categoria}</p>
                <p>{descricao}</p>
                <span>{preco}</span>
            </div>
        </div>
    )
}

export default Card;