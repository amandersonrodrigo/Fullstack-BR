// function funcao() {
//    console.log(arguments[10]);
// }
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Rodrigo');

// arguments que sustenta todos os argumentos enviados
function funcao() {
   let total = 0;
   for (let argumento of arguments) {
      total += argumento;
   }
   console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);
