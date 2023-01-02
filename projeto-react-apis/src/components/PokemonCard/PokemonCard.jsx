import { useNavigate } from "react-router-dom"
import { goToPokemonsDetailPage } from "../../routes/coordinator"
import { Article, Img, Main, Section } from "./styled"

export const PokemonCard = ({ pokemon, image, abilities, id }) => {

    const navigate = useNavigate()
    
    return (
        <>
            <Main>
                <Article>
                    <Section>
                    <h2>#{id}</h2>
                    <h2>{pokemon}</h2>
                    <Img src={image} alt={pokemon} />
                    <button onClick={() => goToPokemonsDetailPage(navigate)}>Detalhes</button>
                    <button onClick={() => alert("Pokemon adicionado à pokédex")}>Capturar</button>
                    </Section>
                </Article>
            </Main>
        </>
    )
}