function playSound(e) {
  const audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
  const audios = document.querySelectorAll(`audio`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; 

  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
