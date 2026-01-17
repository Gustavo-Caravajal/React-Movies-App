import { useEffect, useState } from "react";
import { MediaContext } from "./MediaContext";

export const MediaContextProvider = ({ children, fetchFunction }) => {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        fetchFunction().then((data) => {
            const mediaItems = data.results.map((mediaItem) => ({
                id: mediaItem.id,
                title: mediaItem.name || mediaItem.title,
                overview: mediaItem.overview,
                mediaType: mediaItem.media_type,
                posterPath: mediaItem.poster_path,
                backdropImageUrl: mediaItem.backdrop_path
            }));
            setMediaList(mediaItems);
        })
        .catch((err) => console.log(err));
    }, [fetchFunction]);

    return (
        <MediaContext.Provider value={{ mediaList }}>
            {children}
        </MediaContext.Provider>
    );
};