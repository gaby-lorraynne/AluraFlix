import FormInputs from '../FormInputs';
import styles from './Form.module.css';

const Form = () => {
    return(
        <div className={styles.card}>
            <h2 className={styles.title}>Criar Card</h2>
            <FormInputs titulo={'Título'} placeholder={'Digite o título'}/>
            <FormInputs titulo={'Categoria'} placeholder={'Selecione uma categoria'}/>
            <FormInputs titulo={'Imagem'} placeholder={'O link da imagem é obrigatório'}/>
            <FormInputs titulo={'Video'} placeholder={'Digite o link do vídeo'}/>
            <FormInputs titulo={'Descrição'} placeholder={'Sobre o que é esse vídeo?'}/>
        </div>
    )
}

export default Form;