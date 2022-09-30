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
    const ms = deadline - timeNow;
    if (ms <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startRef.disabled = false;
    }
  },
});

// const timerRef = document.querySelector('.timer');

// const TIMER_DEDLINE = new Date(2022, 08, 29, 21, 00);
// const timer = {
//   intervalId: null,
//   refs: {},
//   start(rootSelector, deadline) {
//     const ms = deadline.getTime() - Date.now();
//     if (ms <= 0) {
//       Notiflix.Notify.failure('Please choose a date in the future!');
//       return;
//     }
//     Notiflix.Notify.success('Time go!');
//     this.intervalId = setInterval(() => {
//       const ms = deadline.getTime() - Date.now();
//       const data = this.convertMs(ms);
//       this.refs.days.textContent = data.days;
//       this.refs.hours.textContent = data.hours;
//       this.refs.minutes.textContent = data.minutes;
//       this.refs.seconds.textContent = data.seconds;
//     }, 1000);
//     this.getRefs(rootSelector);
//   },
//   getRefs(rootSelector) {
//     this.refs.days = rootSelector.querySelector('[data-days]');
//     this.refs.hours = rootSelector.querySelector('[data-hours]');
//     this.refs.minutes = rootSelector.querySelector('[data-minutes]');
//     this.refs.seconds = rootSelector.querySelector('[data-seconds]');
//   },
//   convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   },
// };

// timer.start(timerRef, TIMER_DEDLINE);
