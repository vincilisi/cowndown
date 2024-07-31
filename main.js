let countdownInterval;
let remainingSeconds = 0;

function startCountdown() {
    const inputSeconds = parseInt(document.getElementById('inputSeconds').value);
    if (!isNaN(inputSeconds) && inputSeconds > 0) {
        remainingSeconds = inputSeconds;
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    if (remainingSeconds > 0) {
        remainingSeconds--;
        document.title = `Countdown: ${remainingSeconds} secondi`;
    } else {
        clearInterval(countdownInterval);
        document.title = 'Countdown terminato!';
    }
}

function pauseCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    remainingSeconds = 0;
    document.title = 'Countdown azzerato';
}