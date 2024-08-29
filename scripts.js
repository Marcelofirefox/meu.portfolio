// scripts.js

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    
    // Aqui podemos adicionar código para enviar a mensagem para um servidor
});