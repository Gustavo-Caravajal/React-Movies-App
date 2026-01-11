import './App.css'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroCarouselContainer } from './components/HeroCarouselContainer/HeroCarouselContainer'
import { SliderContainer } from './components/SliderContainer/SliderContainer'
import { Test } from './components/Test'
import { MediaContextProvider } from './context/MediaContext/MediaContextProvider'
import { getTopRatedMovies, getTopRatedSeries, getTrendingMovies, getTrendingSeries } from './services/Media'


function App() {
  return (
    <>
      <div>
        <Header />
        <HeroCarouselContainer/>
        <MediaContextProvider fetchFunction={getTrendingMovies}>
          <SliderContainer title={"Trending movies"}/>
        </MediaContextProvider>
        <MediaContextProvider fetchFunction={getTopRatedMovies}>
          <SliderContainer title={"Top rated movies"}/>
        </MediaContextProvider>
         <MediaContextProvider fetchFunction={getTrendingSeries}>
          <SliderContainer title={"Trending series"}/>
        </MediaContextProvider>
         <MediaContextProvider fetchFunction={getTopRatedSeries}>
          <SliderContainer title={"Top rated series"}/>
        </MediaContextProvider>
        <Footer />

      </div>
    </>
  )
}

export default App
