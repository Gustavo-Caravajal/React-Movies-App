import { useEffect, useState } from "react";
import { getMovieVideos, getTrendingMovies } from "../../services/Media";

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
        <div>
            {heroMovies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    {movie.trailer ? (
                        <p>Trailer Key: {movie.trailer.key} (Site: {movie.trailer.site})</p>
                    ) : (
                        <p>No official trailer</p>
                    )}
                </div>
            ))}
        </div>
    );
};