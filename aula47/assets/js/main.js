function criaHoraDosSegundos(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString('pt-BR', {
      timeZone: 'GMT'
   });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
   timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
   }, 1000);
}

document.addEventListener('click', function(event) {
   const elemento = event.target;

   if (elemento.classList.contains('iniciar')) {
      clearInterval(timer);
      iniciaRelogio();
      relogio.classList.remove('set-pausar');
   }

   if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('set-pausar');
   }

   if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('set-pausar');
      segundos = 0;
   }

});

// function funcaoIniciar(event) {
//    // clearInterval(timer);
//    // iniciaRelogio();
//    // relogio.classList.remove('set-pausar');
// }

// iniciar.addEventListener('click', funcaoIniciar);

// function funcaoPausar(event) {
//    // clearInterval(timer);
//    // relogio.classList.add('set-pausar');
// }

// pausar.addEventListener('click', funcaoPausar);

// function funcaoZerar(event) {
//    // clearInterval(timer);
//    // relogio.innerHTML = '00:00:00';
//    // relogio.classList.remove('set-pausar');
//    // segundos = 0;
// }

// zerar.addEventListener('click', funcaoZerar);