const date = new Date();
const hour = date.getHours();
const day = date.getDay();

if (hour < 5) {
    console.log('Boa madrugada');
} else if (hour <= 12) {
    console.log('Bom dia');
} else if (hour <= 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}

if (day === 0) {
    console.log('Domingo');
} else if (day === 1) {
    console.log('Segunda-feira');
} else if (day === 2) {
    console.log('Terça-feira');
} else if (day === 3) {
    console.log('Quarta-feira');
} else if (day === 4) {
    console.log('Quinta-feira');
} else if (day === 5) {
    console.log('Sexta-feira');
} else {
    console.log('Sábado');
}

