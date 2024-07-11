import Form from '../Form';
import MainTitle from '../MainTitle';
import styles from './Body.module.css';


const BodyCadastro = () => {

    return (
        <div className={styles.content}>
            <MainTitle />
            <Form
                title={'CRIAR CARD'}
                style={{
                    borderRadius: '2px',
                    borderBottom: '3px solid white',
                    borderTop: '3px solid white'
                }}
            />
        </div>
    )
}

export default BodyCadastro;