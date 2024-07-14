import { Link } from 'react-router-dom'
import styles from './Rodape.module.css'



const Rodape = () => {
    return(
        <footer className={styles.footer}>
            <Link>
                <img src='/imagens/logo.png' alt='Logo'/>
            </Link>
        </footer>
    )
}

export default Rodape