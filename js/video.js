// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  // Initialize the video element
  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;

  // Set initial volume information
  updateVolumeInfo();
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  console.log("Slow Down");
  video.playbackRate -= 0.1;
  console.log("New Speed: " + video.playbackRate.toFixed(2));
});

document.querySelector("#faster").addEventListener("click", function () {
  console.log("Speed Up");
  video.playbackRate += 0.1;
  console.log("New Speed: " + video.playbackRate.toFixed(2));
});

document.querySelector("#skip").addEventListener("click", function () {
  console.log("Skip Ahead");
  if (video.currentTime + 10 < video.duration) {
    video.currentTime += 10;
  } else {
    video.currentTime = 0;
  }
  console.log("Current Location: " + video.currentTime.toFixed(2));
});

document.querySelector("#mute").addEventListener("click", function () {
  console.log("Mute/Unmute");
  video.muted = !video.muted;
  this.innerText = video.muted ? "Unmute" : "Mute";
  updateVolumeInfo();
});

document.querySelector("#slider").addEventListener("input", function () {
  console.log("Volume Slider");
  video.volume = this.value / 100;
  updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function () {
  console.log("Old School");
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  console.log("Original");
  video.classList.remove("oldSchool");
});

// Function to update volume information
function updateVolumeInfo() {
  var volumeInfo = document.getElementById("volume");
  volumeInfo.innerText = (video.muted ? "Muted" : video.volume * 100).toFixed(0) + "%";
}