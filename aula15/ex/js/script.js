const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numeroTitulo;
texto.innerHTML = `<p>Seu Número + 2 é: ${numero}</p>`