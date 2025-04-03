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
                    <h2>Insira as informações nos campos abaixo!</h2>

                    <div className="inputBox">
                        <input
                            type="text"
                            id="texto"
                            className="inputCampo"
                            required
                            {...register("texto")}
                        />
                        <label htmlFor="texto" className="labelInput">Mensagam:</label>
                    </div>


                    <div className="cxBotoes">
                        <button type="submit">ENVIAR</button>
                        <button onClick={()=> localStorage.clear()} type="submit">LIMPAR</button>
                    </div >


                </form>


            </section>




        </StyledInseir>
    );
}
