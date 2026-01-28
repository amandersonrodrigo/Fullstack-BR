// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
// }

// for (let i in frutas) {
//    console.log(frutas[i])
// }

const pessoa = {
   nome: 'Amanderson',
   sobrenome: 'Rodrigo',
   idade: 28,
};

for (let chave in pessoa) {
   console.log(chave, pessoa[chave]);
}