// -------------> Exemplo 1

// function funcao() {
//    console.log(arguments[10]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Rodrigo');

// arguments que sustenta todos os argumentos enviados. *************

// -------------> Exemplo 2

// function funcao(a, b, c) {
//    let total = 0;
//    for (let argumento of arguments) {
//       total += argumento;
//    }
//    console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// -------------> Exemplo 3

// function funcao(a, b, c, d, e, f) {
//    console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// -------------> Exemplo 4

// function funcao(a, b = 3, c = 4) {
//    // b = b || 0
//    console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// -------------> Exemplo 5

// function funcao({ nome, sobrenome, idade }) {
//    console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Amanderson', sobrenome: 'Oliveira', idade: 28 };
// funcao(obj);

// -------------> Exemplo 6

// function funcao([ valor1, valor2, valor3 ]) {
//    console.log(valor1, valor2, valor3);
// }

// funcao(['Amanderson Rodrigo', 'Souza de Oliveira', 28]);

// -------------> Exemplo 7

// function conta(operador, acumulador, ...numeros) {
//    for( let numero of numeros) {
//       if(operador === '+') acumulador += numero;
//       if(operador === '-') acumulador -= numero;
//       if(operador === '*') acumulador *= numero;
//       if(operador === '/') acumulador /= numero;
//    }
//    console.log(acumulador)
// }
// conta('+', 1, 20, 30, 40, 50);

// -------------> Exemplo 8

const conta = function(operador, acumulador, ...numeros) {
   for (let numero of numeros) {
      if(operador === '+') acumulador += numero;
      if(operador === '-') acumulador -= numero;
      if(operador === '*') acumulador *= numero;
      if(operador === '/') acumulador /= numero;
   }

   console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);
