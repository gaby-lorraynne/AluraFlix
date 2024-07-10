import Form from '../Form';
import MainTitle from '../MainTitle';
import styles from './Body.module.css';


const BodyCadastro = ({ aoVideoCadastrado }) => {
    
    return(
        <div className={styles.content}>
            <MainTitle/>
            <Form aoVideoCadastrado={aoVideoCadastrado}/>
        </div>
    )
}

export default BodyCadastro;