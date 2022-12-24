import { HomePage } from '../pages/HomePage'
import { Pokedex } from '../pages/Pokedex'
import { DetailPage } from '../pages/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index  element={<HomePage />} />
                <Route path='pokedex' element={<Pokedex />} />
                <Route path='detail-page' element={<DetailPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}