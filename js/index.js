let startTime;
let elapsedTime = 0;
let isRunning = false;
let intervalid;

const timerDisplay = document.getElementById('timer_display');
const startButton = document.getElementById('start_button');
const pauseButton = document.getElementById('pause_button');
const resetButton = document.getElementById('reset_button');

// Отоброжение времени 
const updateDisplay = () => {
    const time = Date.now() - startTime;
    const minutes = Math.floor((time / 60000) %60).toString(). padStart(2,'0');
    const seconds = Math.floor((time / 1000) %60).toString(). padStart(2,'0');
    const milliseconds = Math.floor((time % 1000) / 10).toString(). padStart(2,'0');

    timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

// Запуск таймера 
const startTimer = () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalid = setInterval(updateDisplay,10);
        isRunning = true;
    }
}

// Пауза таймера 
const pauseTimer = () => {
   if (isRunning) {
    clearInterval(intervalid);
    elapsedTime = Date.now() -  startTime;
    isRunning = false;
   } 
}

