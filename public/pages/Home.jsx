import { HeroCarouselContainer } from "../../src/components/HeroCarouselContainer/HeroCarouselContainer";
import { SliderContainer } from "../../src/components/SliderContainer/SliderContainer";
import { MediaContextProvider } from "../../src/context/MediaContext/MediaContextProvider";
import { getTopRatedMedia, getTrendingMedia } from "../../src/services/media";

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