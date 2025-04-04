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

    width:68%;
    height: 98%;
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
    height: 80%;
    margin-bottom: 20%;
    overflow: hidden;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  

}

.logo{
    width: 90%;
}

h1{
    font-size: 5rem;
    text-align: center;
    line-height: 1.2;
    
}

`




export const StyledFotos = styled.section`
    width:30%;
    height: 98%;
    background-color: #0000009a;
`




export const StyledRodape = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  

    .zap{
        width: 30%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
    }
    img{
        width: 150px;

    }
    P{
        font-size:2rem  ;
    }



    .txt{
        width: 80%;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center; 
  
    }
    h2{
        font-size: 3rem;
        line-height: 1.2;
    }

`