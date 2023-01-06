
export const goToPokemonsHome = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToPokemonDetails = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`)
}