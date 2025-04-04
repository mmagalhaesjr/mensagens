import styled from "styled-components";

export const StyledslideFotos = styled.section`

width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;

img{
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next{

color: #fff;
 margin: 1%;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-wrapper{
    
}
.swiper-initialized{
  height: 100%;
}
.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #F4F3F0;
}


`