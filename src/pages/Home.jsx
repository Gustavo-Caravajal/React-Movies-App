import { HeroCarouselContainer } from "../components/HeroCarouselContainer/HeroCarouselContainer";
import { SliderContainer } from "../components/SliderContainer/SliderContainer";
import { MediaContextProvider } from "../context/MediaContext/MediaContextProvider";
import { getTopRatedMedia, getTrendingMedia } from "../services/media";

export const Home = () => {
    return <>
        <HeroCarouselContainer fetchFunction={() => getTrendingMedia("movie")} mediatype="movie" />
        <MediaContextProvider fetchFunction={() => getTrendingMedia("movie")}>
            <SliderContainer title={"Trending movies"} mediaType={"movie"} />
        </MediaContextProvider>
        <MediaContextProvider fetchFunction={() => getTopRatedMedia("movie")}>
            <SliderContainer title={"Top rated movies"} mediaType={"movie"} />
        </MediaContextProvider>
        <MediaContextProvider fetchFunction={() => getTrendingMedia("tv")}>
            <SliderContainer title={"Trending series"} mediaType={"tv"} />
        </MediaContextProvider>
        <MediaContextProvider fetchFunction={() => getTopRatedMedia("tv")}>
            <SliderContainer title={"Top rated series"} mediaType={"tv"} />
        </MediaContextProvider>
    </>;
};