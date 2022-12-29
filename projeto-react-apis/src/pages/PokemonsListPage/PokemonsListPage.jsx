import React from "react"
import { useNavigate } from "react-router-dom"
import logoPokemon from "../../assets/pokemon.svg"
import { Header, Main, H2 } from "./styled"
import { goToPokedexPage, goToPokemonsDetailPage } from "../../routes/coordinator"
import { PokemonCard } from "../../components/PokemonCard/Pokemoncard"


export const PokemonsListPage = () => {
    const navigate = useNavigate()

    return (
        <>
        
            <Header>
                <img src={logoPokemon} alt="" />
                <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
            </Header>
            
            <Main>
                <H2>Todos Pokémons</H2>
                <PokemonCard >
                
                </PokemonCard>
            </Main>
{/* 
            <button onClick={() => goToPokemonsDetailPage(navigate)}>Ir para página de detalhes</button> */}
        </>
    )
}