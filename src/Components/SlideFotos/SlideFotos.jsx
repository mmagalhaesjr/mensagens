import { StyledslideFotos } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-creative';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, A11y } from 'swiper/modules';


import f2 from '../../assets/fotos/2.jpg'
import f3 from '../../assets/fotos/3.jpg'
import f4 from '../../assets/fotos/4.jpg'

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
        <img src={f2} alt="img" />

    </div>
</SwiperSlide>
<SwiperSlide>

    <div id="sala2" className="salas">
        <img src={f3} alt="img" />
       

    </div>

</SwiperSlide>
<SwiperSlide>

    <div id="sala3" className="salas">
        <img src={f4} alt="img" />
        
    </div>

</SwiperSlide>


</Swiper>
        
        </StyledslideFotos>
    )
}