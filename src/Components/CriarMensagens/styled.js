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
}
#botaoMsg{
    font-size: 1rem;
    background-color: #9c0d0d88;
    color: #ffffff;
}


`