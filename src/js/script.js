// Declaração de variaveis
let images = ["./src/assets/img1.jpg", "./src/assets/img2.jpg", "./src/assets/img3.jpg"];
let index = 0;
let time = 3000;

// Funções

function login(){
    document.addEventListener('DOMContentLoaded', () => {
        const loginBtn = document.getElementById('loginBtn');
        const modal = document.getElementById('loginModal');
        const closeBtn = document.querySelector('.closeBtn');
        const loginForm = document.getElementById('loginForm');
        const welcomeMessage = document.getElementById('welcome-message');
    
        // Abrir a janela modal ao clicar no botão de login
        loginBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    
        // Fechar a janela modal ao clicar no botão de fechar
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        // Fechar a janela modal ao clicar fora da área do conteúdo
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    
        // Verificar os campos de login ao enviar o formulário
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio do formulário
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            welcomeMessage.textContent = `Bem-vindo, ${username}!`;
            welcomeMessage.style.display = 'block';
            modal.style.display = 'none'; // Fecha a janela modal
            loginForm.reset();
        });
    });
}


function slideShow() {
    const carousel = document.getElementById("carrosel");
    const dots = document.getElementsByClassName("dot");

    // Remover classe fade-in para iniciar transição de fade-out
    carousel.classList.remove("fade-in");

    setTimeout(() => {
        carousel.src = images[index];
        
        // Adicionar classe fade-in para iniciar transição de fade-in
        carousel.classList.add("fade-in");

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[index].className += " active";

        index++;
        if (index == images.length) {
            index = 0;
        }

    }, 800); // Tempo da transição entre imagens

    setTimeout(slideShow, time); // Muda a imagem a cada 4 segundos
}

function changeSlide(n) {
    index += n;
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }
    showSlide(index);
}

function currentSlide(n) {
    index = n;
    showSlide(index);
}

function showSlide(n) {
    const carousel = document.getElementById("carrosel");
    const dots = document.getElementsByClassName("dot");

    carousel.src = images[n];
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Main
slideShow();

smoothScroll();

login();