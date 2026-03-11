// function retornaFuncao() {
//    const nome = 'Rodrigo';
//    return function() {
//       return nome;
//    };
// }

// const funcao = retornaFuncao();
// console.dir(funcao);


function retornaFuncao(nome) {
   return function() {
      return nome;
   };
}

const funcao = retornaFuncao('Amanderson');
const funcao2 = retornaFuncao('Rodrigo');
console.dir(funcao);
console.dir(funcao2);

function criarContador() {
  let numero = 0; // Isso está "dentro da sala"
  return function() { 
    numero += 1; // A função interna "guarda" a variável numero na mochila
    return numero;
  };
}

const meuContador = criarContador();

console.log(meuContador()); // Resultado: 1
console.log(meuContador()); // Resultado: 2
console.log(meuContador()); // Resultado: 3
console.log(meuContador()); // Resultado: 4





