// IEEE 754-2008
let num1 = 0.7; // Number 
let num2 = 0.1; // Number

// num1 += num2; // num1 = num1 + num2;
num1 += num2; // 0.8
num1 += num2; // 0.9 
num1 += num2; // 1.0


num1 = Number(num1.toFixed(2))

console.log(num1);
console.log(Number.isInteger(num1)); 



// console.log (num1.toString() + num2); transformando para string na linha
// num1 = num1.toString(); transformando number para string
// console.log(num1.toString(2)); versão binária
// console.log(num1.toFixed(2)); abreviando para casas décimais 
// console.log(Number.isInteger(num1)); pergunta se o numero é inteiro e responde com true ou false
// console.log(Number.isNaN(temp)); 
// let temp = num1 + '5';
// console.log(temp);