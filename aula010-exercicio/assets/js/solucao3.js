const h1 = document.querySelector('.container h1');

const date = new Date();

function zeroLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

function getMonth(month) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return months[month];
}

function getDayWeek(day) {
    const days = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return days[day];
}

function createDate(date) {
    const getDay = date.getDay();
    const getNumberMonth = date.getMonth();
    
    const getDayWeekLiteral = getDayWeek(getDay);
    const getMonthLiteral = getMonth(getNumberMonth);

    return (`${getDayWeekLiteral}, ${date.getDate()} de ${getMonthLiteral} de ${date.getFullYear()} ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`);
}

h1.innerHTML = createDate(date);
