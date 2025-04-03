import styled from "styled-components";

export const StyledExibir = styled.main`

width: 100%;
height: 100vh;
background-color: #0a94d4;
position: relative;

display: flex;
align-items: center;
justify-content: space-evenly;

`

export const StyledMensagens = styled.section`

    width:65%;
    height: 95%;
    padding: 20px;
    flex-wrap: wrap;
    position: relative;

    background-color: #daba04fd;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;


.caixaMensagem{
    width: 100%;
    height: fit-content;
    overflow: hidden;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

h1{
    color: #ffffff;
    font-size: 3.5rem;
}

`




export const StyledFotos = styled.section`
    width:30%;
    height: 95%;
    background-color: #0000009a;
`




export const StyledRodape = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 5px red;
  

    .zap{
        width: fit-content;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
    }
    img{
        width: 150px;

    }
    P{
        color:#ffffff;
        font-size:2rem  ;
    }



    .txt{
        width: 80%;
        height: fit-content;
        display: flex;
        align-items: start;
        justify-content: center; 
        border: solid 2px red;
    }
    h2{
        color: #ffffff;
        font-size: 2rem;
        position: absolute;
        bottom: 10px;
    }

`