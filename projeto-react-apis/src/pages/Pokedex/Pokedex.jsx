import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Header } from "../../components/Header/Header"
import { DisplayCards, MainContainer } from "../../constants/styledHeader"
import { Card } from "../../components/Card/Card"


export function Pokedex() {

    const context = useContext(GlobalContext)
    const { pokedex } = context

    return (
        <>
            <Header />
                <MainContainer>
                    <div><h1>Meus Pokémons</h1></div>
                    <DisplayCards>
                        {pokedex.map((pokemon) => (
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