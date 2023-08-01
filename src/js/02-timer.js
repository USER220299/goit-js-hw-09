import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },

})
const input = document.querySelector("#datetime-picker");
console.log(input);
const startBtn = document.querySelector('button[data-start]');

console.log(startBtn);

input.addEventListener('input', onChoiseDate);
const date = new Date();
function onChoiseDate() {
    if (date !== onClose()) {
       window.alert("Please choose a date in the future")
    }
    
}

console.dir(date)