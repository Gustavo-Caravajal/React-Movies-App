import './HeroCarouselContainer.css'
import { useEffect, useState } from "react";
import { getMovieVideos, getTrendingMovies } from "../../services/media";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";


export const HeroCarouselContainer = () => {
    const [heroMovies, setHeroMovies] = useState([]);

    useEffect(() => {
        const fetchHeroMovies = async () => {
            try {
                const data = await getTrendingMovies()
                const movies = data.results.slice(0, 5);
                const moviesWithTrailer = movies.map(async (movie) => {
                    const movieVideos = await getMovieVideos(movie.id);
                    const resultsMovieVideos = movieVideos.results;

                    const officialTrailer = resultsMovieVideos.find((video) => {
                        return video.type === "Trailer" && video.official
                    });

                    const trailer = officialTrailer ? {
                        key: officialTrailer.key,
                        site: officialTrailer.site
                    } : null;
                    const movieWithTrailer = {
                        ...movie,
                        trailer
                    }
                    return movieWithTrailer
                });
                const moviesWithTrailerResolved = await Promise.all(moviesWithTrailer);
                setHeroMovies(moviesWithTrailerResolved);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchHeroMovies();
    }, []);

    return (
        <div className="hero-container">
            {heroMovies.length > 0 &&
                <HeroCarousel movieList={heroMovies} />
            }
        </div>
    );
};