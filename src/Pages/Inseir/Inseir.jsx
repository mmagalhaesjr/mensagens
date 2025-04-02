import { StyledInseir } from "./styled";
import { useForm } from "react-hook-form";
import ComponenteExibir from '../../Components/ComponenteExibir/ComponenteExibir';

export default function Inseir() {
    const { register, handleSubmit } = useForm();

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
            nome: data.nome,
            mensagem: data.mensagem
        };

        // Adiciona a nova mensagem ao array
        mensagensSalvas.push(novaMensagem);

        // Salva a lista atualizada no localStorage
        localStorage.setItem("dadosFormulario", JSON.stringify(mensagensSalvas));

        alert("Dados salvos com sucesso!");
        console.log(mensagensSalvas);
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
                            id="nome"
                            className="inputCampo"
                            required
                            {...register("nome")}
                        />
                        <label htmlFor="nome" className="labelInput">Nome</label>
                    </div>

                    <div className="inputBox">
                        <input
                            type="text"
                            id="mensagem"
                            className="inputCampo"
                            required
                            {...register("mensagem")}
                        />
                        <label htmlFor="mensagem" className="labelInput">Mensagem</label>
                    </div>

                    <button type="submit">ENVIAR</button>
                </form>

                <ComponenteExibir />
            </section>




        </StyledInseir>
    );
}
