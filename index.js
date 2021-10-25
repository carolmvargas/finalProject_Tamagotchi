const prompt = require('prompt-sync')();

console.log("Geben Sie ein Wert für a");
const a = Number (prompt('a? '));
// tem que dar o valor de a no terminal

console.log("Geben Sie jetzt ein Wert für b");
const b = Number(prompt('b? '));
// colocar novamente o valor de b no terminal

console.log("Die Summe von a + b:");
console.log(a + b);