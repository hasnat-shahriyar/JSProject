let timer;
const element = document.getElementById("timer");
let isPaused = false;

(function() {
    let sec = 0;
    timer = setInterval(() => {
        if (!isPaused) {
            element.innerHTML = "00:" + sec;
            sec++;
        }
    }, 1000);
})();

function toggleTimer() {
    if (isPaused) {
        isPaused = false;
        document.getElementById("button").innerText = "Pause";
    } else {
        isPaused = true;
        document.getElementById("button").innerText = "Resume";
    }
}

document.getElementById("button").addEventListener("click", function() {
    toggleTimer();
});
