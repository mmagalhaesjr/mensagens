import { useEffect, useState } from "react";
import { StyledslideFotos } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, A11y } from 'swiper/modules';

export default function SlideFotos() {
    const [imagensSalvas, setImagensSalvas] = useState({});


  useEffect(() => {
    // Função para atualizar imagens
    const atualizarImagens = () => {
      const imagens = JSON.parse(localStorage.getItem("imagens") || "{}");
      setImagensSalvas(imagens);
    };

    atualizarImagens(); // Primeira vez

    // Verifica de tempos em tempos
    const intervalo = setInterval(atualizarImagens, 2000); // Atualiza a cada 2 segundos

    // Limpa o intervalo quando o componente desmontar
    return () => clearInterval(intervalo);
  }, []);

  return (
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
        {Object.entries(imagensSalvas).map(([key, value]) => (
          <SwiperSlide key={key}>
            <div id="sala1" className="salas">
              <img src={value} alt={key} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledslideFotos>
  );
}
