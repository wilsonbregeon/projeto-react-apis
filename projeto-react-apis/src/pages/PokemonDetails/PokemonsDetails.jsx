import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Header } from "../../components/Header/Header"
import { DisplayCards, MainContainer } from "../../constants/styledHeader"
import { useParams } from "react-router-dom"
import { CardDetails } from "../../components/CardDetails/CardDetails"
import pokeball from "../../assets/pokeball.gif"

export function PokemonDetails() {

    const context = useContext(GlobalContext)
    const params = useParams()
    const pokeName = params.pokemonName

    return (
        <>
            <Header />
                <MainContainer>
                    <div><h1>Detalhes</h1></div>
                    <DisplayCards>
                        {context.isLoading ? <img src={pokeball} alt="Loading" />
                            :
                            context.pokemonDetail
                                .filter((pokemon) => pokemon.name === pokeName)
                                .map((pokemon) => (
                                    <CardDetails
                                        key={pokemon.id}
                                        pokemon={pokemon}
                                    />
                                ))}
                    </DisplayCards>
                </MainContainer>
        </>
    )
}