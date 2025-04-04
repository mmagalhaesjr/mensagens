import { useState, useEffect, useRef } from "react";
import { StyledExibir, StyledRodape, StyledFotos, StyledMensagens } from "./styled";
import qrcode from "../../assets/zap.png";
import logo1 from "../../assets/logo1.png";

export default function Exibir() {
  const [mensagens, setMensagens] = useState([]);
  const [mensagemAtualIndex, setMensagemAtualIndex] = useState(0);
  const mensagensAntigasRef = useRef([]);

  // Carrega as mensagens do localStorage
  const carregarMensagens = () => {
    const pegar = localStorage.getItem("dadosFormulario");
    const lista = pegar ? JSON.parse(pegar) : [];
    return lista;
  };

  // Carrega as mensagens inicialmente
  useEffect(() => {
    const mensagensIniciais = carregarMensagens();
    setMensagens(mensagensIniciais);
    mensagensAntigasRef.current = mensagensIniciais;
    setMensagemAtualIndex(0);
  }, []);

  // Avança a mensagem a cada 5 segundos
  useEffect(() => {
    if (mensagens.length === 0) return;

    const intervalo = setInterval(() => {
      setMensagemAtualIndex((prev) => {
        if (prev + 1 < mensagens.length) {
          return prev + 1;
        } else {
          return 0; // volta para o início
        }
      });
    }, 5000);

    return () => clearInterval(intervalo);
  }, [mensagens]);

  // Verifica se surgiram novas mensagens
  useEffect(() => {
    const verificarNovasMensagens = setInterval(() => {
      const atualizadas = carregarMensagens();

      if (atualizadas.length > mensagensAntigasRef.current.length) {
        const novas = atualizadas.slice(mensagensAntigasRef.current.length);
        const atualComNovas = [...mensagens, ...novas]; // <- usa 'mensagens' (estado atual)
        mensagensAntigasRef.current = atualComNovas;
        setMensagens(atualComNovas);
      }
      
    }, 1000); // verifica a cada 5 segundos

    return () => clearInterval(verificarNovasMensagens);
  }, []);

  return (
    <StyledExibir>
      <StyledFotos />

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
            <h2>PEÇA SUA MÚSICA PELO NOSSO WHATSAPP. (32) 99915-8008</h2>
          </div>
        </StyledRodape>
      </StyledMensagens>
    </StyledExibir>
  );
}
