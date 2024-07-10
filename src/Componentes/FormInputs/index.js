import styles from './FormInputs.module.css';

const FormInputs = ({titulo, placeholder, onChange, required, value}) => {
    return(
        <div className={styles.content}>
            <label className={styles.label}>{titulo}</label>
            <input className={styles.input} placeholder={placeholder} onChange={onChange} required={required} value={value}/>
        </div>
    )
}

export default FormInputs;