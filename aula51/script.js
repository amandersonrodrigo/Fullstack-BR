// Return
// Retorna um valor
// Termina a função


// function soma(a, b) {
//    return a + b;
// }
// console.log(soma(2, 5));
// function soma2(a, b) {
//    console.log(a + b);
// }
// soma2(5, 2);




// function criaPessoa(nome, sobrenome) {
//    return { nome, sobrenome }
// }
// const pessoa1 = criaPessoa('Amanderson', 'Rodrigo');
// const pessoa2 = {
//    nome: 'Laryssa',
//    sobrenome: 'Costa',
// };
// console.log(typeof pessoa1);
// console.log(typeof pessoa2);




// function falaFrase(comeco) {
//    function falaResto(resto) {
//       return `${comeco} ${resto}`;
//    }
//    return falaResto;
// }
// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('Mundo!')); 




// function duplica(numero) {
//    return numero * 2;
// }

// function triplica(numero) {
//    return numero * 3;
// }

// function quadriplica(numero) {
//    return numero * 4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));


// function criaMultiplicador(multiplicador) {
//    // Multiplicador 
//    function multiplicacao(n) {
//       return n * multiplicador;
//    }

//    return multiplicacao;
// }

function criaMultiplicador(multiplicador) {
      return function(n) {
       return n * multiplicador;
      };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
