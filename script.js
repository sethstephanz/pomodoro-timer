const start = document.getElementById("start");
const stop = document.getElementById("stop");

let minutes = parseInt(document.getElementById("minutes").innerText);
let seconds = parseInt(document.getElementById("seconds").innerText);

let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");

//clock time to millisecond conversion
let minutesInMS = minutes * 1000 * 60;
let secondsInMS = seconds * 1000;
let totalTime = minutesInMS + secondsInMS;

const countdown = setInterval(function () {
  totalTime = totalTime - 1000;
  let mins = Math.floor(totalTime / 60000); //gets minutes
  let secs = totalTime % 60000; //gets seconds (in 1000s)
  let secsString = secs.toString();
  if (secs === 0 && mins == 0) {
    console.log("Time's up! Take a break");
    clearInterval(countdown);
    return;
  }
  if (secs > 9000) {
    minutesDisplay.innerText = mins;
    secondsDisplay.innerText = secsString[0] + secsString[1];
  } else if (secs <= 9000) {
    console.log(mins + ":" + "0" + secsString[0]);
    minutesDisplay.innerText = mins;
    secondsDisplay.innerText = "0" + secsString[0];
  }
}, 1000);

// const button = document.getElementById("btn");
// const time = document.getElementById("time");
// const stop = document.getElementById("stop");
// let counter = 0;

// let minutes = 25;
// let seconds = 00;

// console.log("timeDisplay: " + timeDisplay);
// let totalTime = minutes * 60000 + seconds * 1000;
// console.log("totalTime: " + totalTime);

// let concat = totalTime;

// button.addEventListener("click", () => {
//   counter++;

//   let mins = Math.floor(totalTime * 60000); //gets minutes
//   console.log("mins: " + mins);
//   let secs = totalTime % 60000; //gets seconds (in 1000s)
//   console.log("secs: " + secs);
//   let secsString = secs.toString();

//   totalTime = totalTime - 1000;

//   if (counter == 1) {
//     const countDown = setInterval(function () {
//       totalTime = totalTime - 1000;
//       console.log("totalTime: " + totalTime);
//       timeDisplay.innerHTML = mins + ":" + secsString[0] + secsString[1];
//       // timeDisplay.innerText = totalTime;
//     }, 1000);
//     stop.addEventListener("click", () => {
//       counter = 0;
//       console.log("counter: " + counter);
//       clearInterval(countDown);
//     });
//   }
//   console.log("counter: " + counter);
// });

// button.addEventListener("click", () => {
//   counter++;

//clock time to millisecond conversion

//   let totalTime = minutes * 60000 + seconds * 1000;
//   if (counter == 1) {
//     const countdown = setInterval(function () {
//       totalTime = totalTime - 1000;
//       let mins = Math.floor(totalTime / 60000); //gets minutes
//       let secs = totalTime % 60000; //gets seconds (in 1000s)
//       let secsString = secs.toString();
//       if (secs < 0) {
//         time.innerHTML = "Time’s Up, Take A Break!";
//         clearInterval(countdown);
//         return;
//       }
//       if (secs > 9000) {
//         time.innerHTML = mins + ":" + secsString[0] + secsString[1];
//       } else if (secs <= 9000) {
//         time.innerHTML = mins + ":" + "0" + secsString[0];
//       }
//     }, 1000);

//     stop.addEventListener("click", () => {
//       counter = 0;
//       clearInterval(countdown);
//     });
//     console.log("counter: " + counter);
//   }
// });
