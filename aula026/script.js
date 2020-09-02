function returnsTime() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function functionInterval() {
    console.log(returnsTime());
}

const timer = setInterval(function() {
    console.log(returnsTime());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);
