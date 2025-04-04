import { StyledslideFotos } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-creative';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, A11y } from 'swiper/modules';


import f1 from '../../assets/fotos/1.png'


export default function SlideFotos(){
    return(
        <StyledslideFotos>

<Swiper

pagination={{ clickable: true }}
slidesPerView={window.innerWidth < 600 ? 1 : 1}
loop={true}
autoplay={{
    delay: 3000,
    disableOnInteraction: false
}}
effect={'fade'}
speed={5000}

modules={[Autoplay, A11y]}
>
<SwiperSlide>

    <div id="sala1" className="salas">
        <img src={f1} alt="img" />

    </div>
</SwiperSlide>
<SwiperSlide>

    <div id="sala2" className="salas">
        <img src={f1} alt="img" />
       

    </div>

</SwiperSlide>
<SwiperSlide>

    <div id="sala3" className="salas">
        <img src={f1} alt="img" />
        
    </div>

</SwiperSlide>


</Swiper>
        
        </StyledslideFotos>
    )
}