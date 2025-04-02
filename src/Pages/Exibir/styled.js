import styled from "styled-components";

export const StyledExibir = styled.main`

width: 100%;
height: 100vh;
background-color: #000000;
position: relative;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


.containerMsg{
    width: 95%;
    height: 70%;
    padding: 20px;
    margin-top: 20px;
    flex-wrap: wrap;

    background-color: #6d6d6d3b;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;
}

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

export const StyledRodape = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  


    section{
        width: 100%;
        height: 200px;
        position: relative;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .zap{
        width: fit-content;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
    }
    img{
        width: 200px;
        margin-bottom: 50px;
    }
    P{
        color:#ffffff;
        font-size:2rem  ;
    }



    .txt{
        width: fit-content;

        display: flex;
        align-items: start;
        justify-content: center; 
    }
    h2{
        color: #ffffff;
        font-size: 3rem;
        position: absolute;
        bottom: 10px;
    }

`