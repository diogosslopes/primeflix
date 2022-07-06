import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Filme from './pages/Filme.js'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/filme/:id" element={<Filme/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes