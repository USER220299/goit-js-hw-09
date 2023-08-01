const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
console.log(startBtn);
console.log(stoptBtn);

startBtn.addEventListener('click', getRandomHexColor);
stoptBtn.addEventListener('click', stopRandomHexColor);
let interval = null;

stoptBtn.setAttribute('disabled', "")
startBtn.removeAttribute('disabled', "");
  

function getRandomHexColor() {
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    interval = setInterval(() => {
      body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }, 1000);
     startBtn.setAttribute('disabled', "")
     stoptBtn.removeAttribute('disabled', "");
    
}

function stopRandomHexColor() {
    clearInterval( interval);
    stoptBtn.setAttribute('disabled', "")
    startBtn.removeAttribute('disabled', "")
 
 
}