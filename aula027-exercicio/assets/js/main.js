const selector = sel => document.querySelector(sel);

const clock = selector('.clock');
const start = selector('.start');
const pause = selector('.pause');
const reset = selector('.reset');
let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
    clock.style.color = "#000";
}

function pauseTimer() {
    clearInterval(timer);
    clock.style.color = "#f00";
}

function resetTimer() {
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    seconds = 0;
    clock.style.color = "#000";
}

start.addEventListener('click', startTimer);

reset.addEventListener('click', resetTimer);

pause.addEventListener('click', pauseTimer);
