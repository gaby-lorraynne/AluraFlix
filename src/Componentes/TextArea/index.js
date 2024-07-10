import styles from './TextArea.module.css';

const TextArea = ({titulo, placeholder, value, required, onChange}) => {
    return(

        <div className={styles.container}>
            <label className={styles.label}>{titulo}</label>
            <textarea className={styles.textarea} placeholder={placeholder} value={value} required={required} onChange={onChange}/>
        </div>
        
    )
}

export default TextArea;