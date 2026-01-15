import './HeroCarouselContainer.css'
import { useEffect, useState } from "react";
import { getMediaVideos } from "../../services/media";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";


export const HeroCarouselContainer = ({fetchFunction, mediatype= "movie"}) => {
    const [heroMedia, setHeroMedia] = useState([]);

    useEffect(() => {
        const fetchHeroMedia = async () => {
            try {
                const data = await fetchFunction()
                const media = data.results.slice(0, 5);
                const mediaWithTrailer = media.map(async (mediaItem) => {
                    const mediaVideos = await getMediaVideos(mediaItem.id, mediatype);
                    const mediaVideoResults = mediaVideos.results;
                    const officialTrailer = mediaVideoResults.find((video) => {
                        return video.type === "Trailer" && video.official;
                    });

                    const trailer = officialTrailer ? {
                        key: officialTrailer.key,
                        site: officialTrailer.site
                    } : null;
                    const mediaWithTrailer = {
                        ...mediaItem,
                        trailer
                    }
                    return mediaWithTrailer
                });
                const mediaWithTrailerResolved = await Promise.all(mediaWithTrailer);
                setHeroMedia(mediaWithTrailerResolved);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchHeroMedia();
    }, [fetchFunction,mediatype]);

    return (
        <div className="hero-container">
            {heroMedia.length > 0 &&
                <HeroCarousel mediaList={heroMedia} />
            }
        </div>
    );
};