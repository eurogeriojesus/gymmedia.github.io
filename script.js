// JavaScript para manipular o comportamento do formulário de contato

// Função para validar o formulário antes do envio
function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Validar se o nome e o email foram preenchidos
    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    return true;
}

// Evento para escutar cliques no botão do menu de navegação responsivo
document.getElementById('btn-menu').addEventListener('click', toggleMenu);


