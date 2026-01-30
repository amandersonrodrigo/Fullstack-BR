//Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero(n1, n2) {
   if (n1 === n2) {
      return `Os números ${n1} e ${n2} são iguais`;
   } else if (n1 > n2) {
      return `O número ${n1} é maior que o número ${n2}`;
   } else {
      return `O número ${n1} é menor que o número ${n2}`;
   }
}

const resultado = maiorNumero(10, 10);

console.log(resultado);