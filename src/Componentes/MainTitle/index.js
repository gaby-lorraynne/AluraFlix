import styles from './MainTitle.module.css';

const MainTitle = () => {
    return(
        <div className={styles.main}>
            <h1 className={styles.title}>NOVO VÍDEO</h1>
            <h4 className={styles.subtitle}>Complete o formulário para criar um novo card de vídeo.</h4>
        </div>
    )
}

export default MainTitle;