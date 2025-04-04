import { useState, useEffect, useRef } from "react";
import { StyledExibir, StyledRodape, StyledMensagens, StyledFotos } from "./styled";
import qrcode from "../../assets/zap.png";
import logo1 from "../../assets/logo1.png";
import SlideFotos from "../../Components/SlideFotos/SlideFotos";

export default function Exibir() {
  const [mensagens, setMensagens] = useState([]);
  const [mensagemAtualIndex, setMensagemAtualIndex] = useState(0);
  const mensagensAntigasRef = useRef([]);

  // Função para carregar mensagens do localStorage
  const carregarMensagens = () => {
    const pegar = localStorage.getItem("dadosFormulario");
    const lista = pegar ? JSON.parse(pegar) : [];
    return lista;
  };

  // Atualiza o estado com novas mensagens se houver diferença
  const atualizarMensagens = () => {
    const atualizadas = carregarMensagens();
    if (atualizadas.length !== mensagensAntigasRef.current.length) {
      mensagensAntigasRef.current = atualizadas;
      setMensagens(atualizadas);
      setMensagemAtualIndex(0); // reinicia da primeira mensagem
    }
  };

  // Carrega as mensagens inicialmente
  useEffect(() => {
    atualizarMensagens();
  }, []);

  // Avança a mensagem a cada 5 segundos
  useEffect(() => {
    if (mensagens.length === 0) return;

    const intervalo = setInterval(() => {
      setMensagemAtualIndex((prev) => (prev + 1) % mensagens.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [mensagens]);

  // Escuta mudanças no localStorage (para múltiplas abas)
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "dadosFormulario") {
        atualizarMensagens();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Escuta mudanças internas (dentro da mesma aba)
  useEffect(() => {
    const verificarNovasMensagens = setInterval(() => {
      atualizarMensagens();
    }, 1000); // verifica a cada 1 segundo

    return () => clearInterval(verificarNovasMensagens);
  }, []);

  return (
    <StyledExibir>
      <StyledFotos>
        <SlideFotos />
      </StyledFotos>

      <StyledMensagens>
        {mensagens.length === 0 ? (
          <img className="logo" src={logo1} alt="logo" />
        ) : (
          <div className="caixaMensagem">
            <h1>{mensagens[mensagemAtualIndex]?.texto}</h1>
          </div>
        )}

        <StyledRodape>
          <div className="zap">
            <img src={qrcode} alt="qrcode" />
          </div>
          <div className="txt">
            <h2>PEÇA SUA MÚSICA PELO NOSSO WHATSAPP (32) 99915-8008</h2>
          </div>
        </StyledRodape>
      </StyledMensagens>
    </StyledExibir>
  );
}
