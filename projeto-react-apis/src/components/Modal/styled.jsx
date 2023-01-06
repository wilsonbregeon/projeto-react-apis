import styled from "styled-components";

export const MainModal = styled.div`
    background-color: white;
    border-radius: 0.75rem;
    width: 25.938rem;
    height: 13.875rem;
    position: absolute;
    top: 30%;
    left: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    :hover{
        cursor: pointer;
        background-color: #e4e4e4;
    }
    
    h2{
        font-size: 3rem;
        font-family: 'Poppins';
    }
    
    p{
        font-size: 1rem;
        font-family: 'Poppins';
    }
`