/* eslint semi: "error" */

function playSound (e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  console.log(key);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

function removeTransition (e) {
  if (e.propertyName !== 'transform') {
    return this;
  };
  console.log(this);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log(keys);
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
