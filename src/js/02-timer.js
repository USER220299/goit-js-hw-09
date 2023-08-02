import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
 input: document.querySelector("#datetime-picker"),
 startBtn: document.querySelector('button[data-start]'),
valueDays: document.querySelector("[data-days]"),
valueHours: document.querySelector("[data-hours]"),
 valueMinutes: document.querySelector("[data-minutes]"),
 valueSeconds: document.querySelector("[data-seconds]"),
}

refs.startBtn.setAttribute('disabled', "");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (new Date() > selectedDates[0] ) {
     Notify.failure("Please choose a date in the future");
     
  } else {
      refs.startBtn.removeAttribute('disabled', "");
      refs.startBtn.addEventListener('click', onClick(selectedDates[0]));

    }
  }

};

flatpickr("#datetime-picker", options);

function onClick(selectedDates) {
  const timer = {
  start() {
    const startDate = selectedDates;
   
setInterval(() => {
  const currentDate = Date.now();
  const deltaTime = startDate - currentDate;
  
  const  { days, hours, minutes, seconds } = convertMs(deltaTime);
  console.log(`${days}:${hours}:${minutes}:${seconds}`)
  updateClockFace( { days, hours, minutes, seconds })
}, 1000)
  }
  

  }
  
  timer.start()
}


function updateClockFace({ days, hours, minutes, seconds }){
refs.valueDays.textContent=`${days}`
  refs.valueHours.textContent = `${hours}`
  refs.valueMinutes.textContent = `${minutes}`
  refs.valueSeconds.textContent=`${seconds}`
}





function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds =addLeadingZero( Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

