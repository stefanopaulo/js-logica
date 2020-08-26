const hour = 6;

if (hour <= 5) {
    console.log('Boa madrugada');
} else if (hour <= 12) {
    console.log('Bom dia');
} else if (hour <= 18) {
    console.log('Boa tarde');
} else if (hour <= 24) {
    console.log('Boa noite');
} else {
    console.log('A hora passada é inválida');
}
