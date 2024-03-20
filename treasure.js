const treasure1 = document.getElementsByClassName("treasure-box1");
const treasure2 = document.getElementsByClassName("treasure-box2");
window.onload = function() {
    shuffleBoxesTreasure();
}
function treasure_box(){
    document.getElementById("popup_chest_treasure").style.display = "block";
}

for (let i = 0; i < treasure1.length; i++) {
    treasure1[i].addEventListener('click', treasure_box);
}

function treasure_box1(){
    document.getElementById("popup_chest_treasure1").style.display = "block";
}

for (let i = 0; i < treasure2.length; i++) {
    treasure2[i].addEventListener('click', treasure_box1);
}

function shuffleBoxesTreasure() {
    const boxesContainer4 = document.querySelector('.treasure_content');
    for (let i = boxesContainer4.children.length; i >= 0; i--) {
        boxesContainer4.appendChild(boxesContainer4.children[Math.random() * i | 0]);
    }
}

function final_score(){
    window.location.href="score.html";
}


/*---------------add points functionality--------------------*/

function addPoints(points) {
    var score = parseInt(localStorage.getItem('score')) || 0;
    score += points;
    localStorage.setItem('score', score);
}


/*---------------Sound functionality--------------------*/

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
