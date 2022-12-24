import React from "react"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/pokedex")
    }
    const goToDetailPage = () => {
        navigate("/detail-page")
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={goToPokedex}>Ir para Pokedex</button>
            <button onClick={goToDetailPage}>Ir para página de detalhes</button>
        </>
    )
}