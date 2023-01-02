import { Main, H2, Div } from "./styled"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { HeaderPokemonsListPage } from "../../components/Header/HeaderPokemonsListPage"
import axios from "axios"
import { useEffect, useState } from "react"

export const PokemonsListPage = () => {

    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        searchPokemon()
    }, [])

    const searchPokemon = () => {
        const endpoints = []
        for (let i = 1; i <= 20; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        console.log(endpoints)
        axios
            .all(endpoints.map((endpoint) => axios
                .get(endpoint)))
            .then((res) => setPokemons(res))
    }

    return (
        <>
            <HeaderPokemonsListPage />
            <Main>
                {pokemons.map((pokemon, key) => {
                    return (
                        <PokemonCard
                            key={key}
                            id={pokemon.data.id}
                            pokemon={pokemon.data.name}
                            image={pokemon.data.sprites.front_default}
                            abilities={pokemon.data.species.url}
                        />
                    )
                })}
            </Main>
        </>
    )
}