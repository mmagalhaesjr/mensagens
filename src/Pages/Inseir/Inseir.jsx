import { StyledInseir } from "./styled";
import { useForm } from "react-hook-form";


export default function Inseir() {
    const { register, handleSubmit,reset } = useForm();


    function criarMensagem(data) {
        // Recupera os dados do localStorage e converte para um array ou inicializa como array vazio
        let mensagensSalvas;
        try {
            mensagensSalvas = JSON.parse(localStorage.getItem("dadosFormulario"));
            if (!Array.isArray(mensagensSalvas)) {
                mensagensSalvas = []; // Se não for um array, inicializa corretamente
            }
        } catch (error) {
            mensagensSalvas = []; // Em caso de erro no JSON, inicia como array vazio
            console.log(error)
        }


        // Cria novo objeto de mensagem
        const novaMensagem = {
            texto: data.texto,
        };

        // Adiciona a nova mensagem ao array
        mensagensSalvas.push(novaMensagem);

        // Salva a lista atualizada no localStorage
        localStorage.setItem("dadosFormulario", JSON.stringify(mensagensSalvas));

        alert("Dados salvos com sucesso!");
        console.log(mensagensSalvas);
        reset();
    }

    return (
        <StyledInseir>

            <h1 className="titulo">
                Controle de Mensagens: TV Backyard
            </h1>

            <section>
                <form onSubmit={handleSubmit(criarMensagem)}>
                    <h2>Insira a mensagem no campo abaixo!</h2>

                    <div className="inputBox">
                        <textarea   id="texto"  className="inputCampo" required    {...register("texto")}   type="text" rows="4" maxLength={150} cols="50"></textarea>
                        <label htmlFor="texto" className="labelInput">Maximo 150 Caracteres:</label>
                    </div>


                    <div className="cxBotoes">
                        <button type="submit">ENVIAR</button>
                        <button id="botaoMsg" onClick={()=> localStorage.clear()} type="submit">EXCLUIR TODAS AS MENSAGENS</button>
                    </div >


                </form>


            </section>




        </StyledInseir>
    );
}
