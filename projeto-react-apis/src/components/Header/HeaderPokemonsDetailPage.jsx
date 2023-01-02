import { useNavigate } from "react-router-dom"
import { goToPokemonsListPage } from "../../routes/coordinator"
import logoPokemon from "../../assets/pokemon.svg"
import { ButtonPokedexPage, Headers, ImgPokedexPage } from "./styled"

export const HeaderPokemonsDetailPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <Headers>
                <ButtonPokedexPage onClick={() => goToPokemonsListPage(navigate)}>Todos Pokémons</ButtonPokedexPage>
                <ImgPokedexPage src={logoPokemon} alt="" />
            </Headers>
        </>
    )
}