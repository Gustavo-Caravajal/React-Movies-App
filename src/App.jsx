import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { MainLayout } from './layouts/MainLayout'
import { Header } from './components/Header/Header'
import { Home } from '../public/pages/Home'
import { Movies } from '../public/pages/movies'
import { TvSeries } from '../public/pages/TvSeries'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="/movie" element={<Movies />} />
              <Route path="/tv" element={<TvSeries />} />
              <Route path="/:type/:id" element={<ItemDetailContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
