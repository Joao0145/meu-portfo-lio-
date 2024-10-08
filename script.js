document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contatoForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação simples dos campos
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de envio (pode ser substituído por uma chamada real à API)
        // Aqui você pode adicionar a lógica de envio, se necessário

        // Feedback ao usuário
        alert('Obrigado pelo seu contato, ' + nome + '! Sua mensagem foi enviada.');
        
        // Resetando o formulário
        form.reset();
    });
});
