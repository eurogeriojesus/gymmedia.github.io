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

// JavaScript para manipular a exibição do menu de navegação responsivo em dispositivos móveis

// Função para alternar a visibilidade do menu de navegação responsivo
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('ativo');
}

// Evento para escutar cliques no botão do menu de navegação responsivo
document.getElementById('btn-menu').addEventListener('click', toggleMenu);

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// JavaScript para o carrossel
let currentIndex = 0;
const carrossel = document.querySelector('.carrossel');
const images = document.querySelectorAll('.carrossel img');
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    const translateX = -currentIndex * 100;
    carrossel.style.transform = `translateX(${translateX}%)`;
}

setInterval(showNextImage, 3000);
