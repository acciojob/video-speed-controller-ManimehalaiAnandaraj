const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.getElementById('video');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress_filled');
const playButton = document.getElementById('player_button');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = documentgetElementById('forward');


video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
playButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', setVolume);
playbackSpeedInput.addEventListener('input', setPlaybackSpeed);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '||'; // Change to pause icon
  } else {
    video.pause();
    playButton.textContent = '>'; // Change to play icon
  }
}

function updateProgress() {
  const { currentTime, duration } = video;
  const progressPercent = (currentTime / duration) * 100;
  progressFilled.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = video.duration;
  video.currentTime = (clickX / width) * duration;
}

function setVolume() {
  video.volume = this.value;
}

function setPlaybackSpeed() {
  video.playbackRate = this.value;
}

function rewind() {
  video.currentTime -= 10;
}

function forward() {
  video.currentTime += 25;
}
