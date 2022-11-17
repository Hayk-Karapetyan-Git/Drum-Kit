const audioPlay = (clickedButton) => {
  let soundFile;
  switch (clickedButton) {
    case "w":
      soundFile = "tom-1.mp3";
      break;
    case "a":
      soundFile = "tom-2.mp3";
      break;
    case "s":
      soundFile = "tom-3.mp3";
      break;
    case "d":
      soundFile = "tom-4.mp3";
      break;
    case "j":
      soundFile = "snare.mp3";
      break;
    case "k":
      soundFile = "crash.mp3";
      break;
    case "l":
      soundFile = "kick-bass.mp3";
      break;
    default:
      soundFile = "tom-1.mp3";
  }
  const audio = new Audio(`sounds/${soundFile}`);
  audio.play();
};

const animation = (clickedButton) => {
  const activeButton = document.querySelector(`.${clickedButton}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  },1000);
}

document
  .querySelectorAll(".drum")
  .forEach((e) => e.addEventListener("click", () => {audioPlay(e.innerHTML), animation(e.innerHTML)}));

document.addEventListener("keydown", (e) => {audioPlay(e.key), animation(e.key)});
