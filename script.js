document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Função de validação de e-mail simples
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Valida os campos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Sucesso
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById('contact-form').reset(); // Limpa o formulário
});
