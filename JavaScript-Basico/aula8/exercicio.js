const nome = 'Amanderson Rodrigo';
const sobrenome = 'Souza de Oliveira';
const idade = 28;
const peso = 60;
const alturaEmM = 1.63;
let indiceMassaCorporal = (peso / (alturaEmM * alturaEmM));
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}. ${nome} Nasceu em ${anoNascimento}.`);

