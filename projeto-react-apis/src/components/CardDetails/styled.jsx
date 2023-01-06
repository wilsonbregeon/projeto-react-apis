import styled from "styled-components";
import backCard from "../../assets/pngwing.svg"

export const MainCardDetails = styled.div`
    border-radius: 2.375rem;
    background-color: ${props => props.colorCard};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 86.813rem;
    height: 41.438rem;
    background-image: url(${backCard});
    background-size: 65% auto;
    background-repeat: no-repeat;
    background-position: top right;  
`
export const DisplayPokemon = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 38.313rem;
    margin-left: 2.5rem;

    div{
        display: flex;
        justify-content: center;     
        align-items: center;
        border-radius: 0.5rem;
        width: 17.625rem;
        height: 17.625rem;
        background-color: white;
    }

    img{
        width: 70%;
    } 
`

export const DisplayBaseStats = styled.div`
    border-radius: 0.75rem;
    font-family: 'Poppins';
    width: 21.438rem;
    height: 38.313rem;
    background-color: white;
    margin-left: 1.875rem;
    padding: 1.25rem;

    h2{
        margin-bottom: 0.625rem;
    }

    p{
        display: flex;
        text-align: right;
        justify-content: space-between;
        font-size: 0.75rem;
        
        span:first-child{
            width: 20%;
            text-align: end;
        }

        span:last-child{
            width: 60%;
        }
    }
`

export const BarStats = styled.span`
    border-radius: 0.5rem;
    height: 0.625rem;

    div{
        border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#73AC31'};
        width: ${props => (props.stats/100)*100}%;
        background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFDD69':'#B5E61D'};
        border-radius: 0.5rem;
        height: 100%;
    }
`

export const DisplayNameMove = styled.div`
    margin-left: 1.875rem;
    font-family: 'Poppins';

    img{
        width: 6.188rem;
        height: 1.938rem;
        margin-left: 0.625rem;
        margin-bottom: 1.5rem;
    }

    h3{
        color: white;
        font-size: 1rem;
        font-weight: bold;  
    }

    h1{
        text-transform: capitalize;
    }

    div:last-child{
        border-radius: 0.5rem;
        background-color: white;
        padding: 1.25rem;
        height: 28.313rem;
        width: 18.25rem;
    }
`

export const DisplaySpritePokemon = styled.div`
    img{
        width: 16.875rem;
        margin-left: 1.875rem;
        margin-bottom: 38.75rem;
    }
`

export const DisplayMoves = styled.p`
    background-color: #ECECEC;
    font-size: 0.875rem;
    border-radius: 0.75rem;
    border: 1px gray dashed;
    margin-bottom: 0.625rem;
    width: auto;
    height: 2.313rem;
    display: flex;
    justify-content: center;
    align-items: center;
`