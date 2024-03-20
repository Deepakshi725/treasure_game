
var bgAudio = document.getElementById("background-audio");
var clickAudio = document.getElementById("mouse-click");
var keyAudio = document.getElementById("key-press");

// Function to play sound effect
function playSoundEffect() {
    var audio = document.getElementById("background-audio");
    audio.play();
  }

function play_mouse_sound(){
    var audio1 = document.getElementById("mouse-click");
    audio1.play();
}

function play_key_sound(){
    var audio2 = document.getElementById("key-press");
    audio2.play();
}
document.addEventListener("keypress", function() {
    play_key_sound();
});
document.addEventListener("click", function() {
    play_mouse_sound();
});

window.addEventListener("load", function() {
    playSoundEffect();
});

// Function to adjust volume
var volumeControl = document.querySelector(".volumeControl");

// Event listener to the volume control input
volumeControl.addEventListener("input", function() {
    var volume = parseFloat(volumeControl.value);
    bgAudio.volume = volume;
    clickAudio.volume = volume;
    keyAudio.volume = volume;
});

  function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
  }
  
  function game_page() {
    document.getElementById("popupContainer").style.display = "none";
    window.location.href="game.html";
   
  }
  
 