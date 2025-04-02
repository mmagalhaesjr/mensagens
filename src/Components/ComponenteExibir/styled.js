import styled from "styled-components";

export const StyledComponenteExibir = styled.main`

width: 500px;
height: 500px;
background-color: #000000;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


section{
    width: 80%;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.caixaMensagem{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

h1{
    color: #ffffff;
    font-size: .7rem;
    margin-top:10px
}



`