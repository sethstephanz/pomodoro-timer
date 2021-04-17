const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timesUp = document.getElementById("timeField");

let minutes = parseInt(document.getElementById("minutes").innerText);
let seconds = parseInt(document.getElementById("seconds").innerText);

let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

//clock time to millisecond conversion
let minutesInMS = minutes * 1000 * 60;
let secondsInMS = seconds * 1000;
let totalTime = minutesInMS + secondsInMS;

let counter = 0;

start.addEventListener("click", () => {
  counter++;
  if (counter == 1) {
    const countdown = setInterval(function () {
      totalTime = totalTime - 1000;
      let mins = Math.floor(totalTime / 60000); //gets minutes
      let secs = totalTime % 60000; //gets seconds (in 1000s)
      let secsString = secs.toString();
      if (secs === 0 && mins == 0) {
        clearInterval(countdown);
        timesUp.innerHTML = "<p>Time’s Up!<br>Take a Break!</p>";
        return;
      }
      if (secs > 9000) {
        minutesDisplay.innerText = mins;
        secondsDisplay.innerText = secsString[0] + secsString[1];
      } else if (secs <= 9000) {
        minutesDisplay.innerText = mins;
        secondsDisplay.innerText = "0" + secsString[0];
      }
      stop.addEventListener("click", () => {
        counter = 0;
        clearInterval(countdown);
        return;
      });
    }, 1000);
  }
});
