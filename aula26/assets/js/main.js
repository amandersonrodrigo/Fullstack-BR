// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log('Evento previnido');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}