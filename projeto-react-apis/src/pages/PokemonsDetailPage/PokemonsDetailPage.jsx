import React from "react"
import { useNavigate } from "react-router-dom"
import { goToPokemonsListPage } from "../../routes/coordinator"

export const PokemonsDetailPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Página de detalhes</h1>
            <button onClick={() => goToPokemonsListPage(navigate)}>Voltar para Home Page</button>
        </>
    )
}