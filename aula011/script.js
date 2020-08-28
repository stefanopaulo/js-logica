// var -> só tem escopo de função
// let -> tem escopo de bloco

var nome = 'Stefano';

function name() {
    var nome = 'Pedro';
    return nome;
}

const nameFunction = name();
console.log(nome);
console.log(nameFunction);

let number = 10;
var number2 = 20;

{
    let number = 30;
    var number2 = 40;
}

console.log(number, number2);

console.log(sobrenome); // undefined
var sobrenome = 'Paulo'; // hoisting
