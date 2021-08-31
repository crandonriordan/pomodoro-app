const formatSeconds = (seconds) => {
  const secondsStr = seconds.toString();
  if(secondsStr.length < 2) {
    return "0" + secondsStr;
  }

  return secondsStr;
}

const getTime = (time) => {
  console.log(time);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes}:${formatSeconds(seconds)}`;
}

const displayTime = (time) => {
  const timer = document.getElementById('timer');
  console.log(timer);
  timer.innerText = getTime(time);
}

const startTimer = (time) => {
  displayTime(time);
  window.setTimeout(() => {startTimer(time - 1)}, 1000);
}

export {displayTime, getTime, startTimer}