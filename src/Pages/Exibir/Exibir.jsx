import { useState, useEffect } from "react";
import { StyledExibir, StyledRodape } from "./styled";
import qrcode from "../../assets/zap.png";
import logo from "../../assets/ico.png";
import logo1 from "../../assets/logo1.png";

export default function Exibir() {
  const pegarMensagens = localStorage.getItem("dadosFormulario");
  const dataObj = pegarMensagens ? JSON.parse(pegarMensagens) : [];

  const [mensagensExibidas, setMensagensExibidas] = useState(dataObj.slice(0, 3));
  const [indiceAtual, setIndiceAtual] = useState(3);

  useEffect(() => {
    if (dataObj.length > 3) {
      const intervalo = setInterval(() => {
        setMensagensExibidas((prev) => {
          if (indiceAtual < dataObj.length) {
            return [...prev.slice(1), dataObj[indiceAtual]];
          }
          return prev;
        });

        setIndiceAtual((prev) => (prev < dataObj.length ? prev + 1 : prev));
      }, 10 * 1000); // troca a cada 10 segundos

      return () => clearInterval(intervalo);
    }
  }, [indiceAtual, dataObj]);

  return (
    <StyledExibir>
      <section className="containerMsg">
        {mensagensExibidas.length === 0 ? (
          <img className="logo" src={logo1} alt="logo" />
        ) : (
          mensagensExibidas.map((obj, index) => (
            <div className="caixaMensagem" key={index}>
              <h1>{obj.nome}</h1>
              <h1>diz:</h1>
              <h1>{obj.mensagem}</h1>
            </div>
          ))
        )}
      </section>

      <StyledRodape>
        <section>
          <div className="zap">
            <p>WHATSAPP</p>
            <img src={qrcode} alt="qrcode" />
          </div>

          <div className="txt">
            <h2>Escaneie o QR Code, envie uma mensagem ou peça sua música.</h2>
          </div>

          <img src={logo} alt="logo" />
        </section>
      </StyledRodape>
    </StyledExibir>
  );
}
