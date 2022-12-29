import React from "react"
import { useNavigate } from "react-router-dom"
import { Header, Main } from "./styled"
import logoPokemon from "../../assets/pokemon.svg"
import { goToPokemonsListPage } from "../../routes/coordinator"

export const PokedexPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header>
                <button onClick={() => goToPokemonsListPage(navigate)}>Todos Pokémons</button>
                <img src={logoPokemon} alt="" />
            </Header>
            <Main>

            </Main>


        </>
    )
}