import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

const Player = () => {
    const parametros = useParams();
    const [video, setVideo] = useState();
    

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => {
                const videoEncontrado = data.find((video) => video.id === Number(parametros.id));
                if (videoEncontrado) {
                    setVideo(videoEncontrado);
                }
            })
            .catch((err) => console.log(err));
    }, [parametros.id]);


    if (!video) {
        return <div>Carregando...</div>;
    }

    return (
        <section className={styles.container}>
            <iframe 
                width="100%"     
                height="100%" 
                src={video.url} 
                title={video.titulo} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            ></iframe>
        </section>
    );
}

export default Player;
