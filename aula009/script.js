const date = new Date();
const dayWeek = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

function getDayWeek(dayWeek) {
    let dayWeekLiteral;

    switch (dayWeek) {
        case 0:
            dayWeekLiteral = 'Domingo';
            return dayWeekLiteral;
        case 1:
            dayWeekLiteral = 'Segunda-feira';
            return dayWeekLiteral;
        case 2:
            dayWeekLiteral = 'Terça-feira';
            return dayWeekLiteral;
        case 3:
            dayWeekLiteral = 'Quarta-feira';
            return dayWeekLiteral;
        case 4:
            dayWeekLiteral = 'Quinta-feira';
            return dayWeekLiteral;
        case 5:
            dayWeekLiteral = 'Sexta-feira';
            return dayWeekLiteral;
        case 6:
            dayWeekLiteral = 'Sábado';
            return dayWeekLiteral;
        default:
            dayWeekLiteral = '';
            return dayWeekLiteral;
    }
}

function getMonth(month) {
    let monthLiteral;

    switch (month) {
        case 0:
            monthLiteral = 'Janeiro';
            return monthLiteral;
        case 1:
            monthLiteral = 'Fevereiro';
            return monthLiteral;
        case 2:
            monthLiteral = 'Março';
            return monthLiteral;
        case 3:
            monthLiteral = 'Abril';
            return monthLiteral;
        case 4:
            monthLiteral = 'Maio';
            return monthLiteral;
        case 5:
            monthLiteral = 'Junho';
            return monthLiteral;
        case 6:
            monthLiteral = 'Julho';
            return monthLiteral;
        case 7:
            monthLiteral = 'Agosto';
            return monthLiteral;
        case 8:
            monthLiteral = 'Setembro';
            return monthLiteral;
        case 9:
            monthLiteral = 'Outubro';
            return monthLiteral;
        case 10:
            monthLiteral = 'Novembro';
            return monthLiteral;
        case 11:
            monthLiteral = 'Dezembro';
            return monthLiteral;
        default:
            return monthLiteral;
    }
}

function displayDate() {
    return `${getDayWeek(dayWeek)}, ${day} de ${getMonth(month)} de ${year}.`;
}

const display = displayDate();
console.log(display);
