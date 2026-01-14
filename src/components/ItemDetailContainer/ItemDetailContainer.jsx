import { useEffect, useState } from "react";
import { getMediaCredits, getMediaGenres, getMediaVideos, getSimilarMedia } from "../../services/media";
import { useParams } from "react-router-dom";
export const ItemDetailContainer = ({ mediaType, fetchFunction }) => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const data = await fetchFunction();
                const media = data.results;
                const found = media.find((mediaItem) => {
                    return mediaItem.id === Number(id);
                });

                if (!found) {
                    throw new Error("Media not found");
                }

                const [videos, credits, similarData, genresData] = await Promise.all([
                    getMediaVideos(found.id, mediaType),
                    getMediaCredits(found.id, mediaType),
                    getSimilarMedia(found.id, mediaType),
                    getMediaGenres(mediaType)
                ]);

                const mediaVideoResults = videos.results;
                const officialTrailer = mediaVideoResults.find((video) => {
                    return video.type === "Trailer" && video.official;
                });

                const mediaCreditsCast = credits.cast.slice(0, 4);
                const castList = mediaCreditsCast.map((castItem) => {
                    const castMember = {
                        id: castItem.id,
                        name: castItem.name,
                        profile_path: castItem.profile_path
                    };
                    return castMember;
                });

                const similarMediaResults = similarData.results.slice(0, 10);
                const similarList = similarMediaResults.map((similarItem) => {
                    const similar = {
                        original_title: similarItem.original_title,
                        poster_path: similarItem.poster_path
                    };
                    return similar;
                });

                const mediaGenresResults = genresData.genres;
                const genreList = found.genre_ids
                    .map((genreId) => {
                        const genres = mediaGenresResults.find((genreItem) => genreId === genreItem.id)?.name;
                        return genres
                    })
                    .filter(Boolean);

                const trailer = officialTrailer ? {
                    key: officialTrailer.key,
                    site: officialTrailer.site
                } : null;

                const cast = castList.length ? castList : null;
                const similar = similarList.length ? similarList : null;
                const genres = genreList.length ? genreList : null;

                const mediaData = {
                    ...found,
                    trailer,
                    cast,
                    similar,
                    genres
                };
                
                setDetail(mediaData);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMedia();
    }, [id, fetchFunction, mediaType])

    return detail;
};