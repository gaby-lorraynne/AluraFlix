import styles from './ListaSuspensa.module.css';

const ListaSuspensa = ({opcoes, label, required , placeholder, value, onChange}) => {
    return(
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select className={styles.select} defaultValue="" value={value} onChange={onChange} required={required}>
                <option value="" disabled hidden>{placeholder}</option>
                {opcoes.map((opcao) => (
                    <option value={opcao.id} key={opcao.id}>{opcao.categoria}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa;