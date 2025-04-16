import styled from "styled-components";

export const StyledVisualuzarMensagens = styled.section`
width: 60%;
height:100%;


display: flex;
align-items: center;
justify-content: center;
gap: 5px;

#msg{
    width: 50%;
    height: 100%;
    background-color: black;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
   
}
#cxMsg{
    width: 90%;
    border: solid 1px #ffffff;
    padding: 10px;
 

    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
}

#tela{
    width: 50%;
    height: 100%;
    
    background-color: black;
   
}

`