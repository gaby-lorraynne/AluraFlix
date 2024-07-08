import React from 'react';
import styles from './BtnCategoria.module.css';

const BtnCategoria = ({ nome, cor }) => {
    return (
        
        <button className={styles.categoriaBotao} style={{ backgroundColor: cor }}>
            {nome}
        </button>
       
    );
};

export default BtnCategoria;
