// short-circuit

// FALSY
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

function falaOi() {
    return 'Oi';
}

const vaiExec = true;

console.log(vaiExec && falaOi());

let corUser = null;
let corDefault = corUser || 'black';

console.log(corDefault);
