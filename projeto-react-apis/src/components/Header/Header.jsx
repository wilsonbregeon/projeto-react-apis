import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goToPokemonsHome, goToPokedex } from "../../routes/coordinator"
import logoPokemon from "../../assets/pokemon.svg"
import { ButtonAddPokemon, ButtonDeletePokemon, ButtonPokedex, MainHeader } from "./styled"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export function Header()  {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)

    const params = useParams()
    const pokeName = params.PokemonName

    const thisPokemon = context.pokemonDetail.find(pokemon => pokemon.name === pokeName)
    const isPokemonInPokedex = context.pokedex.find(pokemon => pokemon.name === pokeName)

    const searchPokedex = () => {
        switch (location.pathname) {
            case "/":
                return <></>
            case `/${pokeName}`:
                return (
                    <>
                        {isPokemonInPokedex ?
                            <ButtonDeletePokemon onClick={() => { context.removePokemonPokedex(thisPokemon) }}>Remover da Pokédex</ButtonDeletePokemon>
                            :
                            <ButtonAddPokemon onClick={() => { context.addPokemonPokedex(thisPokemon) }} >Capturar</ButtonAddPokemon>
                        }
                    </>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <MainHeader>
                <div>
                    {location.pathname === "/" ? '' : <a onClick={(() => goToPokemonsHome(navigate))}>Todos os Pokémons</a>}
                </div>
                <div>
                    <img src={logoPokemon} alt="logo-pokemon" />
                </div>
                {location.pathname === `/${pokeName}` ?
                    <div>
                        {searchPokedex()}
                    </div>
                    :
                    <div>
                        {location.pathname === "/" ? <ButtonPokedex onClick={() => { goToPokedex(navigate) }}>Pokédex</ButtonPokedex> : ''}
                    </div>
                }
            </MainHeader>
        </>
    )
}