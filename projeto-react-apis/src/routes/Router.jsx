import { PokemonsListPage} from '../pages/PokemonsListPage/PokemonsListPage'
import { PokedexPage } from '../pages/PokedexPage/PokedexPage'
import { PokemonsDetailPage } from '../pages/PokemonsDetailPage/PokemonsDetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index  element={<PokemonsListPage />} />
                <Route path='pokedex' element={<PokedexPage />} />
                <Route path='detail-page' element={<PokemonsDetailPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}