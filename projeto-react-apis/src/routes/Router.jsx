import { PokemonsHome} from '../pages/PokemonsHome/PokemonsHome'
import { Pokedex } from '../pages/Pokedex/Pokedex'
import { PokemonDetails } from '../pages/PokemonDetails/PokemonsDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index  element={<PokemonsHome />} />
                <Route path='pokedex' element={<Pokedex />} />
                <Route path='details-page' element={<PokemonDetails/>} />
            </Routes>
        </BrowserRouter>
    )
}