const pessoa1 = { 
    nome: 'Amanderson',
    sobrenome: 'Rodrigo',
    idade: 28,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
    
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();



// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }



// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Amanderson', 'Rodrigo', 28);
// const pessoa2 = criaPessoa('Laryssa', 'Costa', 25);
// const pessoa3 = criaPessoa('Amanda', 'Shirlley', 29);

// console.log(pessoa1.nome);





// Criando Objeto pela variavel
// const pessoa1 = { 
//     nome: 'Amanderson',
//     sobrenome: 'Rodrigo',
//     idade: 28
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// const pessoa2 = {
//     nome: 'Laryssa',
//     sobrenome: 'Costa',
//     idade: 25
// };

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);