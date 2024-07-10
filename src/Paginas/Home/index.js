import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Banner from "../../Componentes/BannerMain";
import Cards from "../../Componentes/Cards";
import BtnCategoria from "../../Componentes/BtnCategoria";


const Home = () => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

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
        setVideos(videos.filter(video => video.id !== id));
        console.log("Foi clicado");
    };

    // Cadastrando video
    const aoVideoCadastrado = (novoVideo) => {
        setVideos([...videos, novoVideo]);
    }

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
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Home;
