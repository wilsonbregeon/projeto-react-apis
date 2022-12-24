import React from "react"
import { useNavigate } from "react-router-dom"

export const DetailPage = ()=> {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate("/")
    }

    return (
        <>
        <h1>Página de detalhes</h1>
        <button onClick={goToHomePage}>Voltar para Home Page</button>
        </>
    )
}