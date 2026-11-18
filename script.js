// TROCAR ABAS
function switchTab(tab, button) {
    document.querySelectorAll('.tab-content')
        .forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.tab-btn')
        .forEach(item => item.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
    button.classList.add('active');
}
// ACIONAR ALERTA
function triggerAlert() {
    if (!confirm("Deseja confirmar o alerta de emergência?")) {
        return;
    }
    document.getElementById('status').innerHTML =
        "🔴 ALERTA DE EMERGÊNCIA ATIVO";
    document.getElementById('status').classList.add('alert');
    document.getElementById('connection').innerHTML =
        "Alerta enviado (simulação)";
    document.getElementById('occurrence').innerHTML =
        "Ocorrência recebida (simulação)";
    document.getElementById('team').innerHTML =
        "🚨 Alerta recebido! Equipe aguardando atendimento.";
    document.getElementById('reset').style.display = "inline-block";
    EnviarAlertaCentral();
    solicitarBotaoMotorista();
}
// ENCERRAR ALERTA
function resetSystem() {
    document.getElementById('status').innerHTML =
        "🟢 OPERAÇÃO NORMAL";
    document.getElementById('status').classList.remove('alert');
    document.getElementById('connection').innerHTML =
        "Conectado (simulação)";
    document.getElementById('occurrence').innerHTML =
        "Nenhuma ocorrência.";
    document.getElementById('team').innerHTML =
        "📋 Aguardando acionamento do motorista.";
    document.getElementById('reset').style.display =
        "none";
}
// REPRODUZIR ÁUDIO
function playAudio() {
    if (!('speechSynthesis' in window)) {
        document.getElementById('audio-status').innerHTML ="Áudio não disponível neste navegador.";
        return;
    }
    stopAudio();
    botaoMotorista();
    let text = document.getElementById('message').innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speechSynthesis.speak(speech);
    document.getElementById('audio-status').innerHTML =
        "🔊 Reproduzindo mensagem...";
}
// PARAR ÁUDIO
function stopAudio() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
    document.getElementById('audio-status').innerHTML =
        "Áudio interrompido.";
}
// LÓGICA DE VERIFICAÇÃO E CONSOLE
let cor_painel = "vermelho";
if (cor_painel === "vermelho") {
    console.log("Atenção motorista! Código vermelho!");
    console.log("Problema dentro do veiculo!");
} else {
    console.log("Código verde!");
    console.log("Nenhum problema dentro do veiculo!");
}
let codigo = false;
let solicitacao;
function botaoMotorista() {
    codigo = true;
    clearTimeout(solicitacao);
    console.log("Solicitação apagada!");
    console.log("Tocar audio de segurança!");
}
function solicitarBotaoMotorista() {
    codigo = false;
    console.log("Motorista, aperte o botão para soltar o áudio!");
    solicitacao = setTimeout(() => {
        if (!codigo) {
            console.log("Solicitação encerrada!");
            console.log("Tocar audio de segurança!");
            playAudio();
        }
    }, 30000);
}
function EnviarAlertaCentral() {
    console.log("Código vermelho!");
    console.log("Problema dentro do ônibus 4022!");
    console.log("Solicitamos avaliação e envio de patrulha de segurança!");
}
