import { StyledInseir } from "./styled";

export default function Inseir() {
    return (
        <StyledInseir>

            <form action="">
                <h2>
                    Insira as informações nos campos a baixo!
                </h2>

                <div className="inputBox">
                    <input type="text" name="nome" id="nome" className="inputCampo" required />
                    <label htmlFor="nome" className="labelInput">Nome</label>
                </div>

                <div className="inputBox">
                    <input type="text" name="mensagem" id="mensagem" className="inputCampo" required />
                    <label htmlFor="nome" className="labelInput">Mensagem</label>
                </div>

                <button>
                    ENVIAR
                </button>
            </form>

        </StyledInseir>
    )
}