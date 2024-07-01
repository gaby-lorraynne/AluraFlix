import React, { useEffect, useState } from 'react';
import Banner from "../../Componentes/BannerMain";
import Cards from "../../Componentes/Cards";
import Form from '../../Componentes/Form';


const Home = () => {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);

    // Consumindo a api de categorias
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

    // Consumindo a api de videos
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

    // Cadastrando video
    const aoVideoCadastrado = (novoVideo) => {
        setVideos([...videos, novoVideo]);
    };

    // Deletando videos
    const DeletarVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
        console.log("Foi clicado");
    };

    return (
        <>
            <Banner />
            {categorias.map(categoria => (
                <div key={categoria.id}>
                    <h2>{categoria.nome}</h2>
                    <Cards
                        opcoes={videos.filter(video => video.categoriaId === categoria.id)}
                        aoDeletar={DeletarVideo}
                    />
                </div>
            ))}
        </>
    );
}

export default Home;
