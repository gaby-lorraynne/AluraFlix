import styles from './TextArea.module.css';

const TextArea = ({titulo, placeholder}) => {
    return(

        <div className={styles.container}>
            <label className={styles.label}>{titulo}</label>
            <textarea className={styles.textarea} placeholder={placeholder}/>
        </div>
        
    )
}

export default TextArea;