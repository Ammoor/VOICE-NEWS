window.onload = function () {
  var video = document.getElementById("intro-video");
  video.play();
};
function toggleAudio() {
  var audioElement = document.getElementById("audio-theme-track");
  var button_content = document.querySelector(
    ".audio-theme-button-container .audio-theme-button"
  );
  if (audioElement.paused == true) {
    audioElement.play();
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.backgroundColor = "crimson";
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.color = "white";
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.transition = "1.5s";
    button_content.innerHTML = "Unplay sound track";
  } else {
    audioElement.pause();
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.backgroundColor = "yellow";
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.color = "black";
    document.querySelector(
      ".audio-theme-button-container .audio-theme-button"
    ).style.transition = "1.5s";
    button_content.innerHTML = "Play sound track";
  }
}
