const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date ();
    
    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    
    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor (totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;
}

//initial call
countdown();

setInterval(countdown, 1000);