import styles from "./Campo.module.css"
import Image from "next/image";
import lupa from "../../../public/Assets/lupa.png";

const CampoDeBusca = ({filtrarPratosTexto}) => {

    const digitarTexto = (texto) => {
        filtrarPratosTexto(texto)
    }

    return (
        <div className={styles.containerInput}>
            <Image className={styles.lupa} src={lupa} alt="Lupa" />
            <input
                className={styles.areaInput}
                type="text"
                onChange={(event) => digitarTexto(event.target.value)}
                placeholder="Pesquise um dos pratos do nosso cardápio"
                />
        </div>
    )
}

export default CampoDeBusca;