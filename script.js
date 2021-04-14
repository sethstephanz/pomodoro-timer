const button = document.getElementById("btn");
const time = document.getElementById("time");
const stop = document.getElementById("stop");
let counter = 0;

inMilliseconds = time * 100000;
let timeRemaining = inMilliseconds;

let minutes = 25;
let seconds = 00;

let value = 10;
display.innerText = value;

start.addEventListener("click", () => {
  counter++;
  if (counter == 1) {
    const countDown = setInterval(function () {
      value--;
      display.innerText = value;
    }, 1000);
    stop.addEventListener("click", () => {
      counter = 0;
      console.log("counter: " + counter);
      clearInterval(countDown);
    });
  }
  console.log("counter: " + counter);
});

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
