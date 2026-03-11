const pessoa = {
    nome: "Amanderson",
    sobrenome: "Rodrigo",
    idade: 28,
    endereco: {
        rua: "Serra Roraima",
        numero: 460
    }
};

//Atribuição via desestruturação
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome);

const { endereco: {rua, numero}, endereco } = pessoa;
console.log(rua, numero, endereco);
