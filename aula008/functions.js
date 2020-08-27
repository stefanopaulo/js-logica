function zeroLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

function formateDate(date) {
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth() + 1);
    const year = zeroLeft(date.getFullYear());
    const hours = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const date = new Date();
const dateBrazil = formateDate(date);
console.log(dateBrazil);
