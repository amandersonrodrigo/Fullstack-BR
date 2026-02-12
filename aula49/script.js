// Declaração de função (Function hoisting)
falaOi('Oi');
function falaOi(texto) {
   console.log(texto)
}

// First-class objects (Função é um Objeto de primeira classe)
// Function expression
const souUmDado = function() {
   console.log('Sou um dado.');
};
souUmDado();

// Função de ordem superior. Higher Order Function.
// function executaFuncao(funcao) {
//    console.log('Vou executar sua função abaixo:');
//    funcao();
// }

// executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
   console.log('Sou uma arrow function!');
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
   falar() {
      console.log('Estou falando...');
   } 
}
obj.falar();
