import { useState, useEffect } from "react";
import { StyledExibir, StyledRodape, StyledFotos, StyledMensagens } from "./styled";
import qrcode from "../../assets/zap.png";
import logo from "../../assets/ico.png";
import logo1 from "../../assets/logo1.png";

export default function Exibir() {
  const [mensagensExibidas, setMensagensExibidas] = useState([]);

  useEffect(() => {
    const atualizarMensagens = () => {
      const pegarMensagens = localStorage.getItem("dadosFormulario");
      let dataObj = pegarMensagens ? JSON.parse(pegarMensagens) : [];

      if (dataObj.length > 1) {
        // Remove a primeira mensagem
        dataObj.shift();
        localStorage.setItem("dadosFormulario", JSON.stringify(dataObj));

        // Atualiza o estado para refletir as 3 primeiras mensagens
        setMensagensExibidas(dataObj.slice(0, 1));

        // Recarrega a página para refletir a mudança
        setTimeout(() => {
          window.location.reload();
        }, 500); // Pequeno delay para garantir a atualização
      } else {
        setMensagensExibidas(dataObj.slice(0, 3));
      }
    };

    // Carrega as mensagens inicialmente
    atualizarMensagens();

    // Define um intervalo para remover a primeira mensagem a cada 10 segundos, se houver mais de 3
    const intervalo = setInterval(atualizarMensagens, 10 * 1000);

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <StyledExibir>

      <StyledFotos>

      </StyledFotos>



      <StyledMensagens>
        {mensagensExibidas.length === 0 ? (
          <img className="logo" src={logo1} alt="logo" />
        ) : (
          mensagensExibidas.map((obj, index) => (
            <div className="caixaMensagem" key={index}>
              <h1>{obj.texto}</h1>
            </div>
          ))
        )}



        <StyledRodape>
         
            <div className="zap">
              <p>WHATSAPP</p>
              <img src={qrcode} alt="qrcode" />
            </div>

            <div className="txt">
              <h2>PEÇA SUA MUSICA PELO NOSSO WHATSAPP. (32) 99915-8008</h2>
            </div>

        </StyledRodape>


      </StyledMensagens>





    </StyledExibir>
  );
}
