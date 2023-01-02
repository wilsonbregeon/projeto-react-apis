import { useNavigate } from "react-router-dom"
import { Main } from "./styled"
import { goToPokemonsListPage } from "../../routes/coordinator"
import {  HeaderPokemonsListPage } from "../../components/Header/HeaderPokemonsListPage"
import { HeaderPokedexPage } from "../../components/Header/HeaderPokedexPage"

export const PokedexPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <HeaderPokedexPage />
            {/* <HeaderPokemonsListPage>
                <button onClick={() => goToPokemonsListPage(navigate)}>Todos Pokémons</button>
            </HeaderPokemonsListPage> */}
            <Main>

            </Main>


        </>
    )
}