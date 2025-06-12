const startDate = new Date('2023-10-14T18:30:00');
const startDateMarry = new Date('2025-04-12T16:55:00'); // Data do início do namoro
const timer = document.getElementById('timer');
const timerMarried = document.getElementById('timerMarried');
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;
let carouselInterval;

// Função para calcular o tempo juntos
function calculateTimeTogether() {
    const now = new Date();
    const timeDiff = now - startDate; // Diferença em milissegundos
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Converte para dias
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Converte para horas
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Converte para minutos
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Converte para segundos
    return `Estamos juntos desde <b>${startDate.toLocaleDateString()}</b> - <b>${days}</b> dias, <b>${hours} horas</b>, <b>${minutes} minutos</b> e <b>${seconds} segundos</b>`;
}

function calculateTimeMarried() {
    const now = new Date();
    const timeDiff = now - startDateMarry; // Diferença em milissegundos
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Converte para dias
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Converte para horas
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Converte para minutos
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Converte para segundos
    return `Estamos Noivos desde <b>${startDateMarry.toLocaleDateString()}</b> - <b>${days}</b> dias, <b>${hours} horas</b>, <b>${minutes} minutos</b> e <b>${seconds} segundos</b>`;
}

// Atualiza o temporizador
function updateTimer() {
    timer.innerHTML = calculateTimeTogether();
    timerMarried.innerHTML = calculateTimeMarried();
}

// Função para mostrar a próxima imagem no carrossel
function showNextImage() {
    images[currentIndex].style.display = 'none'; // Esconde a imagem atual
    currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
    images[currentIndex].style.display = 'block'; // Mostra a nova imagem
}

// Inicializa o carrossel
function startCarousel() {
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'; // Mostra apenas a primeira imagem
    });
    carouselInterval = setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
}

// Pausa o carrossel
function pauseCarousel() {
    clearInterval(carouselInterval);
}

// Retoma o carrossel
function resumeCarousel() {
    pauseCarousel(); // Garante que não haverá múltiplos intervals
    carouselInterval = setInterval(showNextImage, 3000);
}

// Eventos para pausar e retomar o carrossel
carousel.addEventListener('click', () => {
    pauseCarousel();
    alert('Carrossel pausado. Clique em "OK" para continuar.');
    resumeCarousel();
});

carousel.addEventListener('touchstart', pauseCarousel);
carousel.addEventListener('touchend', resumeCarousel);
carousel.addEventListener('mouseover', pauseCarousel);
carousel.addEventListener('mouseout', resumeCarousel);

// Inicializa o temporizador e o carrossel
updateTimer();
setInterval(updateTimer, 1000); // Atualiza o temporizador a cada segundo
startCarousel();