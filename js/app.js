function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value; // Verifica o tipo do ingresso
    let quantidade = document.getElementById('qtd').value; // Coleta a quantidade desejada do usuário

    // Verifica se a quantidade de ingressos é negativa para gerar um alerta
    if (quantidade < 0) {
        alert('Preencha as informações novamente.')
        return;
    }

    let ingresso = document.getElementById(`qtd-${tipoIngresso}`); // Ingresso definitivo do usuário

   // Caso haja ingresso: 
   if (ingresso) {
    let novaQuantidade = ingresso.textContent - quantidade; // A nova quantidade de ingressos diminui de acordo com a quantidade

    // Caso a quantidade ainda seja positiva:
    if (novaQuantidade >= 0) {
        ingresso.textContent = novaQuantidade; // O número de ingressos no site se torna o número diminuído
    } else {
        alert("Quantidade indisponível!"); // Mas caso os ingressos acabem, esse alerta é gerado
    }
   }
}