import {  useContext, useEffect, useState } from 'react';
import FormInputs from '../FormInputs';
import TextArea from '../TextArea';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';
import Botao from '../Botao';
import { useNavigate } from 'react-router-dom';
import { VideoContext } from '../Context/VideoContext';

const Form = ({title, style, video, onEdit}) => {
    const { aoVideoCadastrado } = useContext(VideoContext);
    const [titulo, setTitulo] = useState(video ? video.titulo : '');
    const [imagem, setImagem] = useState(video ? video.imagem : '');
    const [url, setUrl] = useState(video ? video.url : '');
    const [descricao, setDescricao] = useState(video ? video.descricao : '');
    const [categoriaId, setCategoriaId] = useState(video ? video.categoriaId : '');
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();
    
    
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
        const novoVideo = {
            id: video ? video.id : uuidv4(),
            titulo,
            categoriaId: parseInt(categoriaId, 10),
            imagem,
            url,
            descricao
        };
        
        if(video) {
            onEdit(novoVideo);
        }else{
            aoVideoCadastrado(novoVideo);
        }


        navigate('/');

        setTitulo('');
        setCategoriaId('');
        setImagem('');
        setUrl('');
        setDescricao('');
    };
    


    return(
        <div className={styles.card}>
            <h2 className={styles.title} style={style}>{title}</h2>
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
                    onChange={(e) => setCategoriaId(e.target.value)}
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
                    titulo={'Url'} 
                    placeholder={'Digite o link do vídeo'}
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    required
                />
                <TextArea
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