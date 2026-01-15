import { Detail } from "../Detail/Detail";

export const ItemDetail = ({ detail }) => {

    return (
        <Detail
            title={detail.title || detail.name}
            overview={detail.overview}
            posterImageUrl={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
            backdropImageUrl={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
            trailer={detail.trailer}
            cast={detail.cast}
            similar={detail.similar}
            genres={detail.genres}
        />
    )
};