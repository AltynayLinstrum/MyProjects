const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date ();

    console.log(newYearsDate - currentDate);
}
countdown();

setInterval(countdown, 1000)