import { useMediaContext } from "../context/MediaContext/useMediaContext"
export const Test = () => {

    const { mediaList } = useMediaContext();
    
    return <>{
        mediaList.map(movie => (
            <div key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <img src={`http://image.tmdb.org/t/p/original${movie.urlImage}`} alt="imagen pelicula" />
            <img src={`http://image.tmdb.org/t/p/original${movie.urlBackdropImage}`} alt="imagen de fondo pelicula" />
            </div>
        ))
    }
    </>
}