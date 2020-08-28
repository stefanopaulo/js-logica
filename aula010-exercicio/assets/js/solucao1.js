const h1 = document.querySelector('.container h1');

const date = new Date();

function zeroLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

function getDayWeek(dayWeek) {
    let dayWeekLiteral;

    switch (dayWeek) {
        case 0:
            dayWeekLiteral = 'domingo';
            return dayWeekLiteral;
        case 1:
            dayWeekLiteral = 'segunda-feira';
            return dayWeekLiteral;
        case 2:
            dayWeekLiteral = 'terça-feira';
            return dayWeekLiteral;
        case 3:
            dayWeekLiteral = 'quarta-feira';
            return dayWeekLiteral;
        case 4:
            dayWeekLiteral = 'quinta-feira';
            return dayWeekLiteral;
        case 5:
            dayWeekLiteral = 'sexta-feira';
            return dayWeekLiteral;
        case 6:
            dayWeekLiteral = 'sábado';
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
            monthLiteral = 'janeiro';
            return monthLiteral;
        case 1:
            monthLiteral = 'fevereiro';
            return monthLiteral;
        case 2:
            monthLiteral = 'março';
            return monthLiteral;
        case 3:
            monthLiteral = 'abril';
            return monthLiteral;
        case 4:
            monthLiteral = 'maio';
            return monthLiteral;
        case 5:
            monthLiteral = 'junho';
            return monthLiteral;
        case 6:
            monthLiteral = 'julho';
            return monthLiteral;
        case 7:
            monthLiteral = 'agosto';
            return monthLiteral;
        case 8:
            monthLiteral = 'setembro';
            return monthLiteral;
        case 9:
            monthLiteral = 'outubro';
            return monthLiteral;
        case 10:
            monthLiteral = 'novembro';
            return monthLiteral;
        case 11:
            monthLiteral = 'dezembro';
            return monthLiteral;
        default:
            monthLiteral = '';
            return monthLiteral;
    }
}

function createDate(date) {
    const getDay = date.getDay();
    const getNumberMonth = date.getMonth();
    
    const getDayWeekLiteral = getDayWeek(getDay);
    const getMonthLiteral = getMonth(getNumberMonth);

    return (`${getDayWeekLiteral}, ${date.getDate()} de ${getMonthLiteral} de ${date.getFullYear()} ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`);
}

h1.innerHTML = createDate(date);
