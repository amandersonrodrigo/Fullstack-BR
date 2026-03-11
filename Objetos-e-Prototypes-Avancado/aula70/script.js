// const pessoa = {
//    nome: 'Rodrigo',
//    sobrenome: 'Oliveira',
// };
// console.log(pessoa['nome']); // Forma de acessar em notação de colchetes
// console.log(pessoa.sobrenome); // Forma de acessar em notação de ponto

// const chave = 'nome'; //
// console.log(pessoa[chave]); // Acessando a chave dinamicamente. Retorna (pessoa.nome)

// const pessoa1 = new Object(); // Criando objeto a partir de um construtor
// pessoa1.nome = 'Laryssa';
// pessoa1.sobrenome = 'Oliveira';
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// pessoa1.falarNome = function() {
//    console.log(`Olá ${this.nome}`);
// }

// pessoa1.falarNome();

// const pessoa2 = { // Object literal
//    nome: 'Laryssa',
//    sobrenome: 'Oliveira',
// };
// console.log(pessoa1, pessoa2); // Ambos são a mesma coisa

// delete pessoa2.nome; // Apagando a chave (nome) do objeto
// console.log(pessoa2);

// const pessoa1 = new Object(); // Criando objeto a partir de um construtor
// pessoa1.nome = 'Amanderson';
// pessoa1.sobrenome = 'Oliveira';
// pessoa1.idade = 29;
// pessoa1.falarNome = function() {
//    return (`Olá, ${this.nome}`);
// };
// pessoa1.getDataNascimento = function() {
//    const dataAtual = new Date();
//    return dataAtual.getFullYear() - this.idade;
// };
// // console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) { // Usar for in para objetos, coisas não iteraveis
//    console.log(pessoa1[chave]); // se eu quiser acessar o valor da chave atual
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////
// -------> IMPORTANTE ---> Factory functions / Constructor functions / Classes ----> Padrões de projeto / Moldes
// function criaPessoa(nome, sobrenome) { // --> Factory function
//    return {
//       nome,
//       sobrenome,
//       get nomeCompleto() {
//          return `${this.nome} ${this.sobrenome}`;
//       }
//    };
// }

// const p1 = criaPessoa('Amanderson', 'Oliveira');
// console.log(p1.nomeCompleto); // Sem executar o método. Apenas quando utiliza o "Get".

function Pessoa(nome, sobrenome) {
  // --> Constructor function
  this.nome = nome;
  this.sobrenome = sobrenome;
  // No final return this; implicitamente
  Object.freeze(this); // Agora nenhum objeto dessa função poderá ser alterada nem adicionada
}

const p1 = new Pessoa("Amanderson", "Rodrigo"); // Retorna um objeto (mesma coisa de objeto literal apesar de estar escrevendo com function);
Object.freeze(p1); // trava o objeto para não ser alterado.
p1.nome = "Outra coisa"; // <-- Por exemplo, não terá essa alteração
const p2 = new Pessoa("Laryssa", "Costa");

console.log(p1); // <-- Por exemplo
console.log(p2); // <-- Por exemplo
// O que o "new" faz: cria um novo objeto vazio, {} e atrela a palavra "this" dentro da função (no caso Pessoa) ao objeto.

// O construtor (nesse caso "Pessoa") é a função que construiu o objeto.
