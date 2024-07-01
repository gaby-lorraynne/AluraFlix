import styles from './Cards.module.css';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const Cards = (props) => {
    return(
        <div className={styles.content}>
            <div className={styles.card}>
                <div className={styles.videos__Card}>
                    <iframe 
                        className={styles.video}
                        src={props.url}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div className={styles.botoes}>
                    <div className={styles.botao}>
                        <MdDeleteForever 
                            size={40} 
                        />
                        <span  onClick={() => props.aoDeletar(props.id)} >Deletar</span>
                    </div>
                    <div className={styles.botao}>
                        <CiEdit size={40} />
                        <span>Editar</span>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Cards;