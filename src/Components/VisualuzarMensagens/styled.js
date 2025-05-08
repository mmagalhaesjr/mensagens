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
    background-color: #000000;
    color: #ffffff;
    overflow: auto;
    &::-webkit-scrollbar {
         width: 3px;
         height: 5px; 
         border: solid 2px #0fc00600;
         border-radius: 5px;
     }
     &::-webkit-scrollbar-thumb {
         background-color: #f8e806fd;
         border-radius: 5px;
         width: 5px;
         height: 10px; 
     }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  
   
}
#cxMsg{
    width: 90%;
    border: solid 1px #ffffff;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
 

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