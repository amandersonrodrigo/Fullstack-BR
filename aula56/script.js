// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
   return {
      nome, 
      sobrenome,

      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; 
      },

      // Setter
      set nomeCompleto(valor) {
         valor = valor.split(' ');
         this.nome = valor.shift();
         this.sobrenome = valor.join(' ');
      },

      fala(assunto = 'falando sobre NADA') {
         return `${this.nome} está ${assunto}.`;
      },

      altura,
      peso,

      // Getter
      get imc() {
         const indice = this.peso / (this.altura * this.altura);
         return indice.toFixed(2);
      },
   };
}

const p1 = criaPessoa('Amanderson', 'Oliveira', 1.63, 62);
const p2 = criaPessoa('Laryssa', 'Oliveira', 1.53, 62);
const p3 = criaPessoa('Lucas', 'Oliveira', 1.50, 52);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

