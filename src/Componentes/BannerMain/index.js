import './BannerMain.css'

const Banner = () => {
    return(
        <div className='banner'>
            <div className='banner__text'>
                <p className='categoria'>FRONT END</p>
                <p className='banner__title'>SEO com React</p>
                <p className='banner__subtitle'>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div className='banner__video'>
                <iframe 
                    className='video'
                    src="https://www.youtube.com/embed/c8mVlakBESE?si=z6KPg-Iy-DL7u94F" 
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    >
                </iframe>
            </div>
        </div>
    )
}

export default Banner