import axios from 'axios';
import React, { createContext, useState } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const aoVideoCadastrado = (novoVideo) => {
        // axios.post('http://localhost:5000/videos', novoVideo)
        axios.post('http://localhost:5000/videos', {
            "titulo": novoVideo.titulo,
            "categoriaId": novoVideo.categoriaId,
            "imagem": novoVideo.imagem,
            "url": novoVideo.url,
            "descricao": novoVideo.descricao
        })
        .then(resp => {
          setVideos([...videos, resp.dados]);
        })
        .catch(error => console.error('Erro ao adicionar vídeo:', error));
    };

    const DeletarVideo = (id) => {
        axios.delete(`http://localhost:5000/videos/${id}`)
        .then(() => {
          setVideos(videos.filter(video => video.id !== id));
        })
        .catch(error => console.error('Erro ao deletar vídeo:', error));
    };

    return (
        <VideoContext.Provider value={{ videos, aoVideoCadastrado, DeletarVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

export { VideoProvider, VideoContext };
