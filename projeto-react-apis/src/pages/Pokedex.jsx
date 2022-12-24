import React from "react"
import { useNavigate } from "react-router-dom"

export const Pokedex = ()=> {
    const navigate = useNavigate()
    const goToHomePage = () => {
        navigate("/")
    }
    return (
        <>
        <h1>Pokedex</h1>
        <button onClick={goToHomePage}>Voltar para Home Page</button>
        </>
    )
}