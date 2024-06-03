// Declaração de variaveis
let images = ["./src/assets/img1.jpg", "./src/assets/img2.jpg", "./src/assets/img3.jpg"];
let index = 0;
let time = 3000;

// Funções
function slideShow() {
    const carousel = document.getElementById("carrosel");
    const dots = document.getElementsByClassName("dot");

    carousel.src = images[index];
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[index].className += " active";

    index++;
    if (index == images.length) {
        index = 0;
    }
    setTimeout(slideShow, time);
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

