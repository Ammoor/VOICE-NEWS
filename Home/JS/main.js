window.onload = function () {
  var video = document.getElementById("intro-video");
  video.play();
};
function toggleAudio() {
  var audioElement = document.getElementById("audio-theme-track");
  if (audioElement.paused == true) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}
