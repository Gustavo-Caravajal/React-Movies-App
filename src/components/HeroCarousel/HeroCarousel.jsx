import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HeroItem } from "../HeroItem/HeroItem";

export const HeroCarousel = ({ movieList }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            {movieList.length ? (movieList.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <div style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                    }}>
                        <HeroItem {...movie}
                            trailerUrl={
                                movie.trailer ?
                                    `https://www.youtube.com/embed/${movie.trailer.key}`
                                    : null
                            }
                        />
                    </div>
                </Carousel.Item>
            ))
            ) : (
                <p>Cargando...</p>
            )
            }</Carousel>)
};