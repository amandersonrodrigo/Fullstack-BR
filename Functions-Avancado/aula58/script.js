// Função construtora -> retorna Objetos
// Função fabrica -> retorna Objetos
// Contrutora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
   // Atributos ou métodos privados
   const ID = 123456;
   const metodoInterno = () => {

   };

   // Atributos ou métodos públicos
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.metodo = () => {
      console.log(`${this.nome}: Sou um método.`)
   };
}

const p1 = new Pessoa('Amanderson', 'Rodrigo');
const p2 = new Pessoa('Laryssa', 'Costa');
p2.metodo();

console.log(p1.nome);


