import CriarMensagens from "../../Components/CriarMensagens/CriarMensagens";
import InserirImagens from "../../Components/InserirImagens/InserirImagens";
import VisualuzarMensagens from "../../Components/VisualuzarMensagens/VisualuzarMensagens";
import { StyledControle } from "./styled";




export default function Controle() {


    return (
        <StyledControle>
            
            <h1 className="titulo">Controle de Mensagens: TV Backyard</h1>

            <div id="container">

                <div id="cxMensagens">
                    <CriarMensagens />
                     <VisualuzarMensagens />
                </div>


                <div id="cxImg">
                    
                   <InserirImagens/>

                   <p>Obs: Cada imagem deve ter no máximo 200 KB.</p>

                </div>

            </div >





        </StyledControle>
    );
}
