import './HeroCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { HeroItem } from "../HeroItem/HeroItem";

export const HeroCarousel = ({ mediaList }) => {

    return (
        <Carousel interval={4000}>
            {mediaList.length ? (mediaList.map((mediaItem) => (
                <Carousel.Item key={mediaItem.id}>
                    <div className='hero' style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${mediaItem.backdrop_path})`
                    }}>
                        
                        <div className="hero-content">
                            <HeroItem {...mediaItem}
                                trailerUrl={
                                    mediaItem.trailer ?
                                        `https://www.youtube.com/embed/${mediaItem.trailer.key}`
                                        : null
                                }
                            />
                        </div>
                    </div>
                </Carousel.Item>
            ))
            ) : (
                <p>Cargando...</p>
            )
            }</Carousel>)
};