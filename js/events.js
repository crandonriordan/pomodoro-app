import { displayTime, getTime, startTimer } from "./index";


window.addEventListener('load', (event) => {
  let workTime = 24 * 60;
  let restTime = 5 * 60;
  let startStop = document.getElementById("start-stop");
  startStop.onclick = () => { startTimer(workTime) };}
);
