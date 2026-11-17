let cor_painel = "vermelho"
if (cor_painel = "vermelho"){
  console.log("Atenção motorista! Código vermelho!")
  console.log("Problema dentro do veiculo!")
}
else{
  console.log("Código verde!")
  console.log("Nenhum problema dentro do veiculo!")
}
let codigo = false
let solicitacao;
function botaoMotorista() {
codigo = true;
clearTimeout(solicitacao)
console.log("Solicitação apagada!")
console.log("Tocar audio de segurança!")
}
function solicitarBotaoMotorista(){
  codigo = false
  console.log("Motorista, aperte o botão para soltar o áudio!")
  solicitacao = setTimeout(() => {
  if(!codigo) {
      console.log("Solicitação encerrada!")
      console.log("Tocar audio de segurança!")
    }
  }, 30000)
}
solicitarBotaoMotorista()

function EnviarAlertaCentral(){
  console.log("Código vermelho!")
  consoe.log("Problema dentro do ônibus 4022!")
  console.log("Solicitamos avaliação e envio de patrulha de segurança!")
}