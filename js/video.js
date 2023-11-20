// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

let video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    // Initialize the video element
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate -= 0.1;
    console.log("New Speed: " + video.playbackRate.toFixed(2));
    updateVolumeInfo();
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate += 0.1;
    console.log("New Speed: " + video.playbackRate.toFixed(2));
    updateVolumeInfo();
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10;
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log("Current Time: " + video.currentTime.toFixed(2));
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute Video");
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
    updateVolumeInfo();
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Change Volume");
    video.volume = this.value / 100;
    updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Apply Old School Style");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Remove Old School Style");
    video.classList.remove("oldSchool");
});

function updateVolumeInfo() {
    let volumeInfo = document.getElementById("volume");
    volumeInfo.textContent = (video.muted ? "Muted" : video.volume * 100).toFixed(0) + "%";
}
