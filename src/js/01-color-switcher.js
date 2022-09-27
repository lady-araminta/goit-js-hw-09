const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;
startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  timerId = setInterval(getColorChange, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function getColorChange() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStopClick() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
