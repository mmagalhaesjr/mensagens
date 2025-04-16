
import { StyledVisualuzarMensagens } from "./styled";
import ExibirTelaPequena from '../ExibirTelaPequena/ExibirTelaPequena';

import { useEffect, useState, useRef } from "react";

export default function VisualuzarMensagens() {
    const [mensagens, setMensagens] = useState([]);
    const mensagensAntigasRef = useRef([]);
  
    const carregarMensagens = () => {
      const pegar = localStorage.getItem("dadosFormulario");
      return pegar ? JSON.parse(pegar) : [];
    };
  
    const atualizarMensagens = () => {
      const atualizadas = carregarMensagens();
      mensagensAntigasRef.current = atualizadas;
      setMensagens(atualizadas);
    };
  
    useEffect(() => {
      atualizarMensagens();
    }, []);
  
    useEffect(() => {
      const handleStorage = (e) => {
        if (e.key === "dadosFormulario") {
          atualizarMensagens();
        }
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }, []);
  
    useEffect(() => {
      const verificarNovasMensagens = setInterval(() => {
        atualizarMensagens();
      }, 1000);
      return () => clearInterval(verificarNovasMensagens);
    }, []);
  
    const removerMensagem = (index) => {
      const novasMensagens = mensagens.filter((_, i) => i !== index);
      localStorage.setItem("dadosFormulario", JSON.stringify(novasMensagens));
      setMensagens(novasMensagens);
      mensagensAntigasRef.current = novasMensagens;
    };
  
    return (
      <StyledVisualuzarMensagens>
        <div id="msg">
          {mensagens.map((mensagem, index) => (
            <div key={index} id="cxMsg">
              <p>
                <strong>ID {index + 1}:</strong> {mensagem.texto}
              </p>
              <p
                style={{ cursor: "pointer", color: "red", fontSize: "1.5rem" }}
                onClick={() => removerMensagem(index)}
                title="Excluir"
              >
                🗑️
              </p>
            </div>
          ))}
        </div>
  
        <div id="tela">
          <ExibirTelaPequena />
        </div>
      </StyledVisualuzarMensagens>
    );
  }
  