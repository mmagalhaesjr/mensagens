import styled from "styled-components";

export const StyledCriarMsg = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

form{
    width: 100%;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

input{
    margin-bottom: 30px;

}

.inputBox{
    position: relative;
    width: 80%; 
}
.inputCampo{
    background: none;
   
    outline: none;
    color: #101010;
    font-size: 20px;
    width: 100%;
    letter-spacing: 2px;
    
}
.inputCampo:focus ~ .labelInput,
.inputCampo:valid ~ .labelInput{
    top: -30px;
    font-size: 12px;
   
  
    color:#926F5D; 
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
    padding: 10px;
} 


.cxBotoes{
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
}


button{
    width: 30%;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: #2a9c0dcc;
    color: #ffffff;
    border: none;

    &:hover{
        background-color: #1c6909cc; 
    }
}
#botaoMsg{
    font-size: .8rem;
    background-color: #9c0d0dcc;
    color: #ffffff;
    font-weight: bold;
    border: none;

    &:hover{
        background-color: #660909cc;
    }
}


`