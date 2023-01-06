import styled from "styled-components";
import backCard from "../../assets/pngwing.svg"

export const ImgLoading = styled.img`
    width: 3.25rem;
`
export const ImgPokemon = styled.img`
    width: 12.063rem;
    margin-left: 2.5rem;
    margin-top: -3.125rem; 
`

export const MainCard = styled.main`
    width: 27.5rem;
    height: 13.125rem;
    border-radius: 0.75rem;
    background-color: ${props => props.cardColor};
    font-family: "Inter";
    color: white;
    margin-top: 1.875rem;
    background-image: url(${backCard});
    background-size: 50% auto;
    background-repeat: no-repeat;
    background-position: top right;

    a {
        font-family: "Poppins";
        font-weight: bold;
        text-decoration: underline;
    }

    a:hover {
        cursor: pointer;
    }

    button {
        width: 9.125rem;
        height: 2.375rem;
        border-radius: 0.5rem;
        border: none;
        font-family: "Poppins";
        font-size: 1rem;
    }

    button:hover {
        cursor: pointer;
    }
`

export const CardTop = styled.main`
    display: flex;

    p {
            padding-left: 1.25rem;
            padding-top: 1.25rem;
            font-size: 1rem;
            font-weight: bold; 
    }

    h2{
            padding-left: 1.25rem;
            font-size: 1.75rem;
            font-weight: bold;
            text-transform: capitalize;
        }
`

export const CardType = styled.span`
        display: flex;
        margin-top: 0.5rem;
        padding-left: 1.25rem;

        img{
            width: 6.188rem;
            height: 1.938rem;
        }
`

export const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`

export const ButtonAddPokemon = styled.button`
    background-color: white;
`

export const ButtonDeletePokemon = styled.button`
    background-color: #FF6262;
    color: white;
`