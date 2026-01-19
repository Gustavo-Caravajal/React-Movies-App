import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { MainLayout } from './layouts/MainLayout'
import { Home } from '../src/pages/Home'
import { Movies } from '../src/pages/movies'
import { TvSeries } from '../src/pages/TvSeries'


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
