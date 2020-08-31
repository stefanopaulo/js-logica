// let c = 56987450;

// while (c >= 5) {
//     console.log(c);
//     c /= 5;
// }

// console.log(c);

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);
let cont = 0;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
    cont++;
}

const text = cont === 1 ? 'vez' : 'vezes';

console.log(`Executado ${cont} ${text}.`);
