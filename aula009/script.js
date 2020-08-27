const date = new Date();
const dayWeek = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
let dayWeekLiteral;
let monthLiteral;

switch (dayWeek) {
    case 0:
        dayWeekLiteral = 'Domingo';
        break;
    case 1:
        dayWeekLiteral = 'Segunda-feira';
        break;
    case 2:
        dayWeekLiteral = 'Terça-feira';
        break;
    case 3:
        dayWeekLiteral = 'Quarta-feira';
        break;
    case 4:
        dayWeekLiteral = 'Quinta-feira';
        break;
    case 5:
        dayWeekLiteral = 'Sexta-feira';
        break;
    case 6:
        dayWeekLiteral = 'Sábado';
        break;
    default:
        dayWeekLiteral = '';
        break;
}

switch (month) {
    case 0:
        monthLiteral = 'Janeiro';
        break;
    case 1:
        monthLiteral = 'Fevereiro';
        break;
    case 2:
        monthLiteral = 'Março';
        break;
    case 3:
        monthLiteral = 'Abril';
        break;
    case 4:
        monthLiteral = 'Maio';
        break;
    case 5:
        monthLiteral = 'Junho';
        break;
    case 6:
        monthLiteral = 'Julho';
        break;
    case 7:
        monthLiteral = 'Agosto';
        break;
    case 8:
        monthLiteral = 'Setembro';
        break;
    case 9:
        monthLiteral = 'Outubro';
        break;
    case 10:
        monthLiteral = 'Novembro';
        break;
    case 11:
        monthLiteral = 'Dezembro';
        break;
    default:
        break;
}

console.log(`${dayWeekLiteral}, ${day} de ${monthLiteral} de ${year}.`);
