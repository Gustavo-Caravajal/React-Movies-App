import { useEffect, useState } from 'react';
import { getSerieGenres, getSeries, getTopRatedMovies, getTopRatedSeries, getTrendingMovies, getTrendingSeries } from '../services/Media';

export const Test = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getSerieGenres()
            .then(data => {
                console.log(data); // todo el objeto
                console.log(data.genres); // solo el array de películas
                setMovies(data.genres);
            })
            .catch(err => console.error(err));
    }, [movies]);
    return <ul>{
        movies.map(movie => (
            <li key={movie.id}>{movie.name}</li>
        ))
    }
    </ul>
}