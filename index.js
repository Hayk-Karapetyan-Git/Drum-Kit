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

document
  .querySelectorAll(".drum")
  .forEach((e) => e.addEventListener("click", () => audioPlay(e.innerHTML)));

document.addEventListener("keydown", (e) => audioPlay(e.key));
