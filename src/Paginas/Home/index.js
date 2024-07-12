import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Banner from "../../Componentes/BannerMain";
import Cards from "../../Componentes/Cards";
import BtnCategoria from "../../Componentes/BtnCategoria";
import axios from 'axios';
import ModalEdit from '../../Componentes/ModalEdit';



const Home = () => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [videoEditado, setVideoEditado] = useState(null);

    const coresCategoria = {
        'FRONT END': '#6BD1FF',
        'BACK END': '#00C86F',
        'MOBILE': '#FFBA05',
    };

    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((dados) => {
            setCategorias(dados);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/videos", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((dados) => {
            setVideos(dados);
        })
        .catch((err) => console.log(err));
    }, []);

    // Deletando o vídeo
    const DeletarVideo = (id) => {
        axios.delete(`http://localhost:5000/videos/${id}`)
        .then(() => {
          setVideos(videos.filter(video => video.id !== id));
        })
        .catch(error => console.error('Erro ao deletar vídeo:', error));
    };

 
    return (
        <>
            <Banner />
            {categorias.map(categoria => (
                <div key={categoria.id} className={styles.categoriaSection}>
                    <BtnCategoria nome={categoria.categoria} cor={coresCategoria[categoria.categoria]}/>
                    <div className={styles.cardsContainer}>
                        <Cards
                            opcoes={videos.filter(video => video.categoriaId === categoria.id)}
                            aoDeletar={DeletarVideo}
                            aoVideoEditado={video => setVideoEditado(video)}
                        />
                    </div> 
                </div>
            ))}
            <ModalEdit video={videoEditado} aoFechar={() => setVideoEditado(null)}/>
        </>
    );
}

export default Home;
