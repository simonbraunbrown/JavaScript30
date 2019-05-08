
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggleButton = player.querySelector('.player__button');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function videoClicked () {
    // if (video.paused == true) {
    //     video.play();
    // toggleButton.textContent = '||';
    // }
    // else {
    //      video.pause();
    //  toggleButton.textContent = '►';
    //  }

    video.paused ? (video.play() , toggleButton.textContent = '||') : (video.pause() , toggleButton.textContent = '►');
};

function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;

};

function movingGradient () {
    if (!video.paused) {
    const dt = new Date();
    const gen = dt.getMilliseconds() / 10;
    const sinGen = (Math.sin(Math.PI * Date.now() / 1000 ) + 1) / 2;
    progressBar.style.background = `linear-gradient(135deg, #7c1599 ${0}%,#921099 ${gen}%, #7e4ae8 ${100}% )`;    
}
    window.requestAnimationFrame(movingGradient);
}

function buttonClicked () {
    videoClicked();
};

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
   }
   
   function handleRangeUpdate() {
     video[this.name] = this.value;
   }

   function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }


// prepare EventListeners
video.addEventListener('click', videoClicked);
video.addEventListener('timeupdate', handleProgress)
toggleButton.addEventListener('click', buttonClicked);
window.requestAnimationFrame(movingGradient);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); 

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);