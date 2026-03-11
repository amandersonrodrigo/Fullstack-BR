// Valor por referência
//                   0           1          2         3        4         5         6
// const nomes = ['Amanderson', 'Laryssa', 'Ricardo', 'Dalva', 'Lucas', 'Amanda', 'Emilly'];
// // const nomes = new Array('Amanderson', 'Laryssa', 'Ricardo');
// // const novo = nomes; Apontam para o mesmo lugar na mémoria;
// const novo = [...nomes]; // Cópia de "nomes" para dentro de "novo";
// const fatiado = nomes.slice(1, -2);


// const nome = 'Amanderson Rodrigo Oliveira';
// const nomes = nome.split(' '); // transforma o nome em um array separado por virgulas
const nomes = [ 'Amanderson', 'Rodrigo', 'Oliveira' ];
const nome = nomes.join(' '); // Transforma o array em uma string;
console.log(nome);


// novo.pop();
// console.log(nomes);
// console.log(novo);
// console.log(fatiado);