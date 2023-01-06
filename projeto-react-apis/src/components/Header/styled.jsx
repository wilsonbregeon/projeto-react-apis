import styled from "styled-components";

export const MainHeader = styled.header`
    background-color: white;
    height: 10rem;
    display: flex;
    width: 100%;

    img{
        width: 19.063rem;
        height: 6.875rem;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.30%;
    }

    a{
        font-family: 'Poppins';
        font-weight: bold;
        font-size: 1.25rem;
        text-decoration-line: underline;
    }

    a:hover{
        cursor: pointer;
    }
`

export const ButtonDeletePokemon = styled.button`
    width: 14.125rem;
    height: 3.563rem;
    border: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: 'Poppins';
    background-color: #FF6262;
    color: white;
    border: none;

    :hover {
        cursor: pointer;
    }
`

export const ButtonAddPokemon = styled.button`
    width: 16rem;
    height: 3.563rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Poppins';
    background-color: #33A4F5;
    color: white;
    border: none;

    :hover {
        cursor: pointer;
    }
`

export const ButtonPokedex = styled.button`
    width: 17.938rem;
    height: 4.625rem;
    background-color: #33A4F5;
    border-radius: 0.5rem;
    color: white;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 1.5rem;
    border: none;

    :hover {
        cursor: pointer;
    }
`