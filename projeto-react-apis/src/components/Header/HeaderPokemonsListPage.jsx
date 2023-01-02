import { ButtonPokemonListPage, Headers } from "./styled"
import logoPokemon from "../../assets/pokemon.svg"
import { useNavigate } from "react-router-dom"
import { goToPokedexPage } from "../../routes/coordinator"

export const HeaderPokemonsListPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Headers>
                <img src={logoPokemon} alt="" />
                <ButtonPokemonListPage onClick={() => goToPokedexPage(navigate)}>Pokédex</ButtonPokemonListPage>
            </Headers>
        </>
    )
}