import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import MenuLink from '../MenuLink'


const NavBar = () => {
    return(
        <nav className={styles.nav}>
            <Link>
                <img src='/imagens/logo.png' alt='Logo'/>
            </Link>
            <ul className={styles.list}>
                <MenuLink to="/" className={styles.link}>
                    Home
                </MenuLink>
                <MenuLink to="/CriarVideo" className={styles.link}>
                    Novo Video
                </MenuLink>
            </ul>
        </nav>
    )
}

export default NavBar