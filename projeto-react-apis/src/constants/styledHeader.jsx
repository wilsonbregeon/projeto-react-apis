import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #5E5E5E;
    padding-top: 2rem;
    width: 100%;
    min-height: 128vh;

    h1{
        font-family: 'Poppins';
        font-size: 2rem;
        padding-left: 2.5rem;
        font-weight: 700;
        color: white;
    }
`

export const DisplayCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    padding-top: 2rem;
`