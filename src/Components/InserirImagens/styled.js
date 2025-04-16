import styled from "styled-components";

export const StyledInserirImagens = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    

    background-color: #ffffff;

    form{
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content:space-evenly;
    }

.inputBox{
    width: 250px;
    position: relative;
    border: solid 1px black;
    background-color: #e2e2e2;
    color: #000000;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

}

.inputCampo{
    width: 100%;
    background: none;
    outline: none;
    border: solid 1px #000000;
    color: #101010;
    font-size: 20px;
    background-color: #ffffff;
  
    letter-spacing: 2px;

  
}


.labelInput{
    position: absolute;
    top: -20px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
    padding: 5px;
    font-size: 1rem;
  
    font-size: 12px;
    color:#926F5D; 
} 
    

    button{
    width: fit-content;
    padding: 5%;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;
}

img{
width:200px ;
height: 300px;
}
`