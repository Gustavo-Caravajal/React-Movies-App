import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroCarouselContainer } from './components/HeroCarouselContainer/HeroCarouselContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { SliderContainer } from './components/SliderContainer/SliderContainer'
import { MediaContextProvider } from './context/MediaContext/MediaContextProvider'
import { getTrendingMedia, getTopRatedMedia, getMovies, getSeries } from './services/media'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
      <div>
        <Header />
       <BrowserRouter>
          <Routes>
            <Route path="/movie" element={<ItemListContainer fetchFunction={getMovies} typeMedia={"movie"} title={"Movies"}/>} />
            <Route path="/tv" element={<ItemListContainer fetchFunction={getSeries} typeMedia={"tv"} title={"TV Series"}/>} />
          </Routes>
        </BrowserRouter>
        

        <BrowserRouter>
          <Routes>
            <Route path="/:type/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>

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
