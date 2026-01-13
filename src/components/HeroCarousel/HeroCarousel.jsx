import './HeroCarousel.css'

import Carousel from 'react-bootstrap/Carousel';
import { HeroItem } from "../HeroItem/HeroItem";

export const HeroCarousel = ({ movieList }) => {

    return (
        <Carousel interval={4000}>
            {movieList.length ? (movieList.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <div className='hero' style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                    }}>
                        {/*<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />*/}
                        <div className="hero-content">
                            <HeroItem {...movie}
                                trailerUrl={
                                    movie.trailer ?
                                        `https://www.youtube.com/embed/${movie.trailer.key}`
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