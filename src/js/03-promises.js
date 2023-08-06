import { Notify } from 'notiflix/build/notiflix-notify-aio';
const forma = document.querySelector('.form')


forma.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  let delay = Number( formEl.delay.value);
  const step = Number(formEl.step.value);
  const amount =Number(formEl.amount.value);

  for (let i = 0; i < amount; i += 1){
    const delayStep = delay+step*i
    const position = i+1;
    setTimeout(() => {
       createPromise(position,delayStep).then((result) => {
    Notify.success(result);
  })
  .catch((error) => {
   Notify.failure(error);
  });
    }, step*(i+1))
   
  }

}

function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
    }, delay)
  
})
  return promis;
}
    

