const reloj = document.getElementById('reloj');
let stopwatchInterval;
let runningTime = 0;


const startReloj = () => {
    let startTime = Date.now() - runningTime;
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        reloj.textContent = calculateTime(runningTime);
    }, 1000)

}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");
    return `${display_minutes}:${display_seconds}`
}


