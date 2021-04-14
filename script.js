const button = document.getElementById("btn");
const time = document.getElementById("time");
let countDownStatus = 1; //even = on, odd = off

inMilliseconds = time * 100000;

let timeRemaining = inMilliseconds;

button.addEventListener("click", () => {
  countDownStatus++;
  let minutes = 00; //user can change this
  let seconds = 10; //user can't change this

  //clock time to millisecond conversion
  let minutesInMS = minutes * 1000 * 60;
  let secondsInMS = seconds * 1000;
  let totalTime = minutesInMS + secondsInMS;
  if (countDownStatus % 2 == 0) {
    const countdown = setInterval(function () {
      totalTime = totalTime - 1000;

      let mins = Math.floor(totalTime / 60000); //gets minutes
      let secs = totalTime % 60000; //gets seconds (in 1000s)
      let secsString = secs.toString();
      if (secs < 0) {
        time.innerHTML = "Time’s Up, Take A Break!";
        clearInterval(countdown);
        return;
      }
      if (secs > 9000) {
        //   console.log("displayTime: " + mins + ":" + secsString[0] + secsString[1]);
        time.innerHTML = mins + ":" + secsString[0] + secsString[1];
      } else if (secs <= 9000) {
        //   console.log("displayTime: " + mins + ":" + "0" + secsString[0]);
        time.innerHTML = mins + ":" + "0" + secsString[0];
      }
    }, 1000);
  }
});
