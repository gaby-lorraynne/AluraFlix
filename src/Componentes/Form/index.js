import {  useEffect, useState } from 'react';
import FormInputs from '../FormInputs';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';
import Botao from '../Botao';

const Form = ({aoVideoCadastrado}) => {

    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categorias, setCategorias] = useState([]);
    
    // Consumindo a api para as categorias
    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((dados) => {
            setCategorias(dados)
        })
        .catch((err) => console.log(err))
    }, [])
   

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoVideoCadastrado({
            id: uuidv4(),
            titulo,
            categorias,
            imagem, 
            video,
            descricao 
        })
        // Para limpar o campo após criar card
        setTitulo('')
        setCategorias('')
        setImagem('')
        setVideo('')
        setDescricao('');
    }
    


    return(
        <div className={styles.card}>
            <h2 className={styles.title}>Criar Card</h2>
            <form onSubmit={aoSalvar} className={styles.form}>
                <FormInputs 
                    titulo={'Título'} 
                    placeholder={'Digite o título'}
                    value={titulo} 
                    onChange={(e) => setTitulo(e.target.value)}   
                    required  
                />
                <ListaSuspensa
                    label={'Categoria'}
                    placeholder={'Selecione uma categoria'}
                    opcoes={categorias} 
                    required
                >
                    <option value="">Selecione uma categoria</option>
                    
                </ListaSuspensa>
                <FormInputs 
                    titulo={'Imagem'} 
                    placeholder={'O link da imagem é obrigatório'}
                    value={imagem} 
                    onChange={(e) => setImagem(e.target.value)} 
                    required
                />
                <FormInputs 
                    titulo={'Video'} 
                    placeholder={'Digite o link do vídeo'}
                    value={video} 
                    onChange={(e) => setVideo(e.target.value)} 
                    required
                />
                <FormInputs
                    titulo={'Descrição'} 
                    placeholder={'Sobre o que é esse vídeo?'}
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)} 
                    required
                />
                <Botao>
                    GUARDAR
                </Botao>
            </form>
            
        </div>
    )
}

export default Form;