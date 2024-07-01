import { useState } from 'react';
import Banner from "../../Componentes/BannerMain";
import Cards from "../../Componentes/Cards";
import { v4 as uuidv4 } from 'uuid';

const Home =  () => {

    const [categorias, setCategorias] = useState([
        {
            id: uuidv4(),
            nome: 'FRONT END'
        },
        {
            id: uuidv4(),
            nome: 'BACK END'
        },
        {
            id: uuidv4(),
            nome: 'MOBILE'
        }
    ])

    const [videos, setVideos] = useState([
        {
            id: uuidv4(),
            categoriaId: categorias[0].id,
            url: 'https://www.youtube.com/embed/c8mVlakBESE?si=z6KPg-Iy-DL7u94F' 
        }
    ])

    // Deletar Video
    const DeletarVideo = (id) =>{
        setVideos(videos.filter(video => video.id !== id));
        console.log("Foi clicado")
    }

    return(
        <>
            <Banner/>
            {categorias.map(categoria => (
                <div key={categoria.id}>
                    <h2>{categoria.nome}</h2>
                    {videos.filter(video => video.categoriaId === categoria.id).map(video => (
                        <Cards
                            key={video.id}
                            id={video.id}
                            categoriaId={categoria.id}
                            imagem={video.imagem}
                            url={video.url}
                            aoDeletar={DeletarVideo}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}

export default Home;