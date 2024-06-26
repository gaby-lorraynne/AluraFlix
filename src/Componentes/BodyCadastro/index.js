import Form from '../Form';
import MainTitle from '../MainTitle';
import styles from './Body.module.css';

const BodyCadastro = () => {
    return(
        <div className={styles.content}>
            <MainTitle/>
            <Form/>
        </div>
    )
}

export default BodyCadastro;