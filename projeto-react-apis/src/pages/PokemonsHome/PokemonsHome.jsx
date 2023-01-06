import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Header } from "../../components/Header/Header"
import { DisplayCards, MainContainer } from "../../constants/styledHeader"
import { Card } from "../../components/Card/Card"

export function PokemonsHome() {

    const context = useContext(GlobalContext)
    const { pokemons } = context

    return (
        <>
            <Header />
            <MainContainer>
                <div><h1>Todos Pokémons</h1></div>
                <DisplayCards>
                    {pokemons && pokemons
                        .sort((a, b) => {
                            if (a?.id > b?.id) {
                                return 1
                            } else {
                                return -1
                            }
                        })
                        .map((pokemon) => (
                            <Card
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        ))}
                </DisplayCards>
            </MainContainer>
        </>
    )
}