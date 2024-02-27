let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function nextSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function prevSlide() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

next.addEventListener('click', function() {
    nextSlide();
});

prev.addEventListener('click', function() {
    prevSlide();
});

// Configurar o carrossel para avançar automaticamente a cada 3 segundos
let intervalId = setInterval(function() {
    nextSlide();
}, 5000);

// // Para o carrossel quando o usuário interagir com os botões
// next.addEventListener('click', function() {
//     clearInterval(intervalId);
// });

prev.addEventListener('click', function() {
    clearInterval(intervalId);
});