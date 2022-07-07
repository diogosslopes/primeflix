import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Movie from './pages/Movie.js'
import Header from './components/Header.js'
import Favorites from './pages/Favorites.js'
import Error from './pages/Error.js'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/movie/:id" element={<Movie/>}  />
                <Route path="/favorites" element={<Favorites/>}  />

                <Route path='*' element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes