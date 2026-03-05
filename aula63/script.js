//                  0            1          2          3         4
const nomes = ['Amanderson', 'Rodrigo', 'Laryssa', 'Ricardo', 'Dalva'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Amanda');

// unshift
nomes.splice(0, 0, 'Jule');

console.log(nomes);
