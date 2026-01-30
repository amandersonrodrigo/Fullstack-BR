
// try {
//    console.log(a);
// } catch (erro) {
//    console.log('a não existe');
// }

function soma (x, y) {
   if(typeof x !== 'number' || typeof y !== 'number') {
      throw new ReferenceError('x e y precisam ser números');
   }
   return x + y;
}

try {
console.log(soma(2, 3));
console.log(soma('2', 3));
} catch(error) {
   // console.log(error);
   console.log('Alguma coisa mais amigável para o usuário');
}