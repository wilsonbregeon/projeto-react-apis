import { Header } from "./styled"

export const Header = () => {
    return(
        <>
        <Header>
                <img src={logoPokemon} alt="" />
                <button onClick={goToPokedexPage}>Pokédex</button>
            </Header>
        </>
    )
}