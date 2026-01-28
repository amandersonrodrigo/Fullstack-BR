const nomes = ['Amanderson', 'Laryssa', 'Ricardo', 'Amanda'];

// For Clássico - Geralmente com interáveis (Arrays, Strings)
// For In - Retorna o índice ou chave (String, Array ou Objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//    console.log(nomes[i]);
// }

for (let i in nomes) {
   console.log(nomes[i]);
}

console.log('######');

for (let valor of nomes) {
   console.log(valor);
}

console.log('######');

nomes.forEach((nome) => {
   console.log(nome);
});



