import { getMedia, getMediaCredits, getMediaVideos, getSimilarMedia } from "../../services/media";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { type, id } = useParams();
    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const data = await getMedia(id, type);
                const media = data;

                const [videos, credits, similarData] = await Promise.all([
                    getMediaVideos(id, type),
                    getMediaCredits(id, type),
                    getSimilarMedia(id, type),
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
                        profilePath: castItem.profile_path
                    };
                    return castMember;
                });

                const similarMediaResults = similarData.results.slice(0, 10);
                const similarList = similarMediaResults.map((similarItem) => {
                    const similar = {
                        id: similarItem.id,
                        title: similarItem.title || similarItem.name,
                        posterPath: similarItem.poster_path
                    };
                    return similar;
                });

                const trailer = officialTrailer ? {
                    name: officialTrailer.name,
                    key: officialTrailer.key,
                    site: officialTrailer.site
                } : null;

                const cast = castList.length ? castList : null;
                const similar = similarList.length ? similarList : null;

                const mediaData = {
                    ...media,
                    trailer,
                    cast,
                    similar,
                };

                setDetail(mediaData);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMedia();
    }, [id, type])

    return (
        <main className="main-detail-container">{
            Object.keys(detail).length > 0 ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando...</p>
            )
        }</main>
    );
};