import styled from "styled-components";


export const StyledControle = styled.main`

width: 100%;
height: 100vh;
background-color: #f5f1c3;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



.titulo{
   font-size: 2.5rem;
   margin-bottom: 3%;
}


#container{
   width: 100%;
   height: 80%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
}

#cxMensagens{
   width:98%;
   height: 48%;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;

   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

#cxImg{
   width: 98%;
   height: 48%;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

#cxImg p{
   position: absolute;
   bottom: 10px;
}



`