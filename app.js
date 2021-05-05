//MOVIMENTO QUE FAZ ANIMAÇÃO ACONTECER

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//ELEMENTOS SOBRE O CARD
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//EVENTO MOVIMENTO ANIMAÇÃO

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

//MOUSE DENTRO DO CARD
container.addEventListener('mouseenter', (e) => {
    card.style.transform = 'none';
    //EFEITO SOBRE
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
});



//MOUSE FORA DO CARD
container.addEventListener('mouseleave', (e) => {
    card.style.transform = 'all 0.5s esse';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //FIM DO EFEITO SOBRE
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';

});