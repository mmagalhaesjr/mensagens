import { StyledComponenteExibir } from "./styled";

export default function ComponenteExibir() {

  const pegarMensagens = localStorage.getItem('dadosFormulario')
  const dataObj = JSON.parse(pegarMensagens)

  console.log(pegarMensagens)

  return (
    <StyledComponenteExibir>


        {dataObj.map((obj) => (

          <div className="caixaMensagem">
            <h1>{obj.nome}</h1>

            <h1>diz:</h1>

            <h1>{obj.mensagem}</h1>
          </div>

        ))}


    </StyledComponenteExibir>
  )
}