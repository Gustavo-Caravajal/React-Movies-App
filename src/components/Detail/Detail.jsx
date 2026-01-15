import { Slider } from "../Slider/Slider";
import './Detail.css'
export const Detail = ({
    title,
    overview,
    posterImageUrl,
    backdropImageUrl,
    trailer,
    cast,
    similar,
    genres
}) => {


    return (<>
        <div className='hero' style={{
            backgroundImage: `url(${backdropImageUrl})`
        }}>
            <div className="image-container">
                <img className="poster-image" src={posterImageUrl} alt={title} />
            </div>
            <div className="detail">
                <h2>{title}</h2>
                <div className="genre-container">
                    {genres?.length > 0 ? (
                        genres.map((genre) => (
                            <span className="genre" key={genre.id}>{genre.name}</span>
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
                <div className="overview-container">
                    <p className="movie-overview">{overview}</p>
                </div>
                <h3>Top Cast</h3>
                <div className="cast-container">
                    {cast ? (
                        cast.map((castItem) => (
                            <article className="cast-item" key={castItem.id}>
                                <img className="cast-item-image" src={`https://image.tmdb.org/t/p/original${castItem.profilePath}`} alt={castItem.name} />
                                <p>{castItem.name}</p>
                            </article>
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </div>
        </div>
        <div className="media-container">
            <div className="trailer-container">{
                trailer && (<>
                    <h3>{trailer.name}</h3>
                    <iframe className="video" src={`https://www.youtube.com/embed/${trailer.key}`} allowFullScreen frameBorder="0" />
                </>)}</div>
            <div className="slider-container">
                <div className="slider-header">
                    <h3>Similar movies</h3>
                </div>
                <div className="slider-body">{
                    similar?.length > 0 && (
                        <Slider className="slider" list={similar} />
                    )}</div>
            </div>
        </div>
    </>);
};