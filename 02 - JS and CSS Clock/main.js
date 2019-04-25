/* eslint semi: "error" */

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
  const now = new Date();
  console.log(Date());
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // "rotate(" + secondsDegree + "deg)"
  secondHand.style.background = 'rgb(' + (seconds / 60) * 255 + ',0,0)';
  console.log(seconds + 's');

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins + 'min');

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 + (mins / 60 / 12)) * 360) + 90;
  hourHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
  console.log(hours + 'h');
  console.log((hours / 12) + (mins / 60 / 12));
}

setInterval(setDate, 1000);
