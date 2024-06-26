import styles from './FormInputs.module.css';

const FormInputs = ({titulo, placeholder}) => {
    return(
        <div className={styles.content}>
            <label className={styles.label}>{titulo}</label>
            <input className={styles.input} placeholder={placeholder}/>
        </div>
    )
}

export default FormInputs;