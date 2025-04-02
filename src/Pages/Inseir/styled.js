import styled from "styled-components";

export const StyledInseir= styled.main`

width: 100%;
height: 100vh;
background-color: #f5f1c3;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.titulo{
   font-size: 2.5rem;
}

h2{
    font-size: 2rem;
}

form{
    width: 60%;
    height: 500px;
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
    border: none;
    border-bottom: 1px solid #101010;
    outline: none;
    color: #101010;
    font-size: 20px;
    width: 100%;
    letter-spacing: 2px;
    
}
.inputCampo:focus ~ .labelInput,
.inputCampo:valid ~ .labelInput{
    top: -20px;
    font-size: 12px;
  
    color:#926F5D; 
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
} 


button{
    width: 30%;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;
}




`