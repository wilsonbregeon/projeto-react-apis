//CSS Pokédex

import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        background-color: transparent;
        border: none;
        font-size: larger;
        margin-left: 4%;
        height: 6vh;
        width: 12vw;
        cursor: pointer;
        :hover {
        background-color: #33A4F5;
        border: #33A4F5;
        border-radius: 6px;
        color: #FFFFFF ;
     }
    }
    

    img{
        margin-right: 40%;
    }
`

export const Main = styled.main`
    background-color: #8A8A8A;
    height: 100vh;
    margin-top: 1%;
`