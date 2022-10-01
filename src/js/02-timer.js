import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const startRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
startRef.disabled = true;
let deadline = null;
const calendar = flatpickr(inputRef, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    deadline = selectedDates[0];
    const timeNow = Date.now();
    const delta = deadline - timeNow;
    if (delta <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startRef.disabled = false;
    }
  },
});

startRef.addEventListener('click', startTimer);

function startTimer() {
  const timerId = setInterval(() => {
    const dateNow = Date.now();
    const delta = deadline - dateNow;
    if (delta <= 0) {
      Notiflix.Notify.success('Countdown is over!');
      clearInterval(timerId);
      return;
    }
    const finalValue = convertMs(delta);
    daysRef.textContent = addLeadingZero(finalValue.days);
    hoursRef.textContent = addLeadingZero(finalValue.hours);
    minutesRef.textContent = addLeadingZero(finalValue.minutes);
    secondsRef.textContent = addLeadingZero(finalValue.seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
