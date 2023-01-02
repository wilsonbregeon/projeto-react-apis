import { useNavigate } from "react-router-dom"
import {  HeaderPokemonsDetailPage } from "../../components/Header/HeaderPokemonsDetailPage"
import { Main } from "./styled"

export const PokemonsDetailPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <HeaderPokemonsDetailPage />
            <Main>
                
            </Main>
        </>
    )
}