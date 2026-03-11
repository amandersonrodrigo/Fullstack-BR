// IIFE -> Immediately Invoked Function Expression
(function(idade, peso, altura) {
   const sobrenome = 'Oliveira';
   function criaNome(nome) {
      return nome + ' ' + sobrenome;
   }

   function falaNome() {
      console.log(criaNome('Amanderson'));
   }

   falaNome();
   console.log(idade, peso, altura);

})(28, 60, 1.63); 


// (function() {
//    console.log('Olá Mundo!');
// })();
