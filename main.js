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

window.addEventListener("keydown", playSound);
