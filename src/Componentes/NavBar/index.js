import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='nav'>
            <Link>
                <img src='/imagens/logo.png' alt='Logo'/>
            </Link>
            <ul className='list'>
                <Link to="/" className='link'>HOME</Link>
                <Link className='link'>NOVO VÍDEO</Link>
            </ul>
        </nav>
    )
}

export default NavBar