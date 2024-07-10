import styles from './Cards.module.css';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Cards = ({opcoes, aoDeletar}) => {
    return(
        <div className={styles.content}>
            {opcoes.map((opcao) => (
                <div className={styles.card} key={opcao.id}>
                    <div className={styles.videos__Card}>
                        <Link to={`/${opcao.id}`}>
                            <img src={opcao.imagem} alt={opcao.titulo} />
                        </Link>
                    </div>
                    <div className={styles.botoes}>
                        <div className={styles.botao} onClick={() => aoDeletar(opcao.id)}>
                            <MdDeleteForever size={40} />
                            <span>Deletar</span>
                        </div>
                        <div className={styles.botao}>
                            <CiEdit size={40} />
                            <span>Editar</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;