import { StyledExibir } from "./styled";

export default function Exibir() {

  const pegarMensagens = localStorage.getItem('dadosFormulario')
  const dataObj = JSON.parse(pegarMensagens)

  console.log(pegarMensagens)

  return (
    <StyledExibir>




      <section>


        {dataObj.map((obj) => (

          <div className="caixaMensagem">
            <h1>{obj.nome}</h1>

            <h1>diz:</h1>

            <h1>{obj.mensagem}</h1>
          </div>

        ))}

      </section>


    </StyledExibir>
  )
}