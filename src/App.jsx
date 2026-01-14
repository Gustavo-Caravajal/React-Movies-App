import './App.css'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroCarouselContainer } from './components/HeroCarouselContainer/HeroCarouselContainer'
import { SliderContainer } from './components/SliderContainer/SliderContainer'
import { MediaContextProvider } from './context/MediaContext/MediaContextProvider'
import { getTrendingMedia, getTopRatedMedia } from './services/media'


function App() {
  return (
    <>
      <div>
        <Header />
        <HeroCarouselContainer fetchFunction={()=>getTrendingMedia("movie")} mediatype="movie"/>
        <MediaContextProvider fetchFunction={()=>getTrendingMedia("movie")}>
          <SliderContainer title={"Trending movies"}/>
        </MediaContextProvider>
        <MediaContextProvider fetchFunction={()=>getTopRatedMedia("movie")}>
          <SliderContainer title={"Top rated movies"}/>
        </MediaContextProvider>
         <MediaContextProvider fetchFunction={()=>getTrendingMedia("tv")}>
          <SliderContainer title={"Trending series"}/>
        </MediaContextProvider>
         <MediaContextProvider fetchFunction={()=>getTopRatedMedia("tv")}>
          <SliderContainer title={"Top rated series"}/>
        </MediaContextProvider>
        <Footer />

      </div>
    </>
  )
}

export default App
