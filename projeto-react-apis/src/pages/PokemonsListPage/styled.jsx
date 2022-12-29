// CSS PokemonsListPage

import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        background-color: #33A4F5;
        border: #33A4F5;
        border-radius: 6px;
        color: #FFFFFF ;
        height: 6vh;
        width: 10vw;
        margin-right: 4%;
        font-size: larger;
        cursor: pointer;
    }
    img{
        justify-content: center;
        margin-left: 40%;
    }
`

export const Main = styled.main`
    background-color: #8A8A8A;
    height: 130rem;
    margin-top: 1%;
    border-radius: 0.75rem;
`
export const H2 = styled.h2`
    color: #FFFFFF;
    padding-top: 2rem;
    padding-left: 2rem;
    font-size: 2rem;
`