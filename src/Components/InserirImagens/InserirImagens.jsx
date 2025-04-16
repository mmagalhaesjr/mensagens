import { StyledInserirImagens } from "./styled";

export default function InserirImagens() {
    return (
        <StyledInserirImagens>

            <form action="">

                <div className="inputBox">
                    <img src="https://webshop.vteximg.com.br/arquivos/ids/200402-0-0/M_Goleio_Frente.jpg?v=637843305065030000" alt="img" />

                    <input className="inputCampo" type="text" />
                    <label htmlFor="texto" className="labelInput">Link imagem 1:</label>
                </div>

                <div className="inputBox">
                    <img src="https://i.pinimg.com/474x/f8/b1/7b/f8b17b36f07ee0b473023dfe38cadf5e.jpg" alt="img" />

                    <input className="inputCampo" type="text" />
                    <label htmlFor="texto" className="labelInput">Link imagem 2:</label>
                </div>

                <div className="inputBox">
                    <img src="" alt="img" />

                    <input className="inputCampo" type="text" />
                    <label htmlFor="texto" className="labelInput">Link imagem 3:</label>
                </div>

                <div className="inputBox">
                <img src="" alt="img" />
                    <input className="inputCampo" type="text" />
                    <label htmlFor="texto" className="labelInput">Link imagem 4:</label>
                </div>

                <div className="inputBox">
                   <img src="" alt="img" />
                    <input className="inputCampo" type="text" />
                    <label htmlFor="texto" className="labelInput">Link imagem 5:</label>
                </div>




                <div className="cxBotoes">
                    <button type="submit">Atualizar</button>
                </div>

            </form>

        </StyledInserirImagens>
    )
}