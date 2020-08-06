/*
 Operadores de comparação
 -------------------------
 > maior que
 >= maior ou igual
 < menor que
 <= menor ou igual
 == igualdade (valor)
 === igualdade estrita (valor e tipo)
 != diferente (valor)
 !== diferente estrito (valor e tipo)
*/

let comp = 10 > 5;
console.log(comp);

comp = 10 >= 11;
console.log(comp);

comp = 10 < 11;
console.log(comp);

let num1 = 10;
let num2 = '10';

comp = num1 == num2;
console.log(comp);

comp = num1 === num2;
console.log(comp);

comp = num1 != num2;
console.log(comp);

comp = num1 !== num2;
console.log(comp);