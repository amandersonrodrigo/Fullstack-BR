const fizzBuzz = (numero) => {
   const vetor = [];

   for (let i = 1; i <= numero; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         vetor.push('FizzBuzz');
      } else if (i % 3 === 0) {
         vetor.push('Fizz');
      } else if (i % 5 === 0) {
         vetor.push('Buzz');
      } else {
         vetor.push(i);
      }
   }
   return vetor;
}

const resultado = fizzBuzz(100);

console.log(resultado);