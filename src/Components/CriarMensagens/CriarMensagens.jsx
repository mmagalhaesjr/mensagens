import { StyledCriarMsg } from "./styled";

import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';

export default function CriarMensagens() {
    const { register, handleSubmit, reset } = useForm();



    function criarMensagem(data) {
        let mensagensSalvas;
        try {
            mensagensSalvas = JSON.parse(localStorage.getItem("dadosLocalStorage"));
            if (!Array.isArray(mensagensSalvas)) {
                mensagensSalvas = [];
            }
        } catch (error) {
            mensagensSalvas = [];
            console.log(error);
        }

        const novaMensagem = {
            texto: data.texto,
        };

        mensagensSalvas.push(novaMensagem);
        localStorage.setItem("dadosLocalStorage", JSON.stringify(mensagensSalvas));

        alert("Dados salvos com sucesso!");
        console.log(mensagensSalvas);
        reset();

        // Limpa os estados dos inputs
    }
    return (
        <StyledCriarMsg>


            <form onSubmit={handleSubmit(criarMensagem)}>

                <div className="inputBox">
                    <textarea id="texto" className="inputCampo" required {...register("texto")} rows="4" maxLength={150} cols="50" />
                    <label htmlFor="texto" className="labelInput">Máximo 150 Caracteres:</label>
                </div>

                <div className="cxBotoes">
                    <button type="submit">ENVIAR</button>
                    <button id="botaoMsg" onClick={() => localStorage.clear()} type="button">EXCLUIR TUDO!</button>
                </div>
            </form>


        </StyledCriarMsg>
    )
}