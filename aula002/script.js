/**
 * Operadores Lógcos
 * && -> AND
 * || -> OR
 * !  -> NOT
 */

let exp = true && true;
console.log(exp);

exp = true || false
console.log(exp);

exp = !true
console.log(exp);

const user = 'Luiz';
const password = 654321;

if (user === 'Luiz' && password === 654321) {
    console.log('Login efetuado...');
} else {
    console.log('usuário ou senha incorretos...');
}
