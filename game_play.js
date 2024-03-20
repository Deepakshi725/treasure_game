const chest1 = document.getElementById("level1_box1");
const chest2 = document.getElementById("level1_box2");
const chest3 = document.getElementById("level1_box3");
const chest4 = document.getElementById("level1_box4");
    
    
    
function popup_chest1(){
    document.getElementById("popup_chest").style.display = "block";

}

chest1.addEventListener('click', function(){
    shuffleBoxesLevel_1();
    popup_chest1();

});



function popup_chest2(){
    document.getElementById("popup_chest_container2").style.display = "block";

}

chest2.addEventListener('click',function() {
    shuffleBoxesLevel_2();
    popup_chest2();
  
   
});

function popup_chest3(){
    document.getElementById("popup_chest_container3").style.display = "block";
}

chest3.addEventListener('click',function() {
    shuffleBoxesLevel_3();
    popup_chest3();
  
});

function popup_chest4(){
    document.getElementById("popup_chest_container4").style.display = "block";
}

chest4.addEventListener('click',function() {
    shuffleBoxesLevel_4();
    popup_chest4();
   
    
});


const level2 = document.getElementsByClassName("monster");

function monster_box(){
    document.getElementById("popup_chest_monster").style.display = "block";
}

for (let i = 0; i < level2.length; i++) {
    level2[i].addEventListener('click', monster_box);
}

const level2_1 = document.getElementsByClassName("survived_by_monster");

function point_box(){
    const popupPoints = document.getElementsByClassName("point1");
    for (let i = 0; i < popupPoints.length; i++) {
        popupPoints[i].style.display = "block";
    }
}

for (let i = 0; i < level2_1.length; i++) {
    level2_1[i].addEventListener('click', point_box);
}


const level3 = document.getElementsByClassName("crocodile");

function crocodile_box(){
    document.getElementById("popup_chest_crocodile").style.display = "block";
}

for (let i = 0; i < level3.length; i++) {
    level3[i].addEventListener('click', crocodile_box);
}

const level3_1 = document.getElementsByClassName("survived_by_crocodile");

function point_box1(){
    const popupPoints = document.getElementsByClassName("point2");
    for (let i = 0; i < popupPoints.length; i++) {
        popupPoints[i].style.display = "block";
    }
}

for (let i = 0; i < level3_1.length; i++) {
    level3_1[i].addEventListener('click', point_box1);
}


const level4 = document.getElementsByClassName("desert");

function desert_box(){
    document.getElementById("popup_chest_desert").style.display = "block";
}

for (let i = 0; i < level4.length; i++) {
    level4[i].addEventListener('click', desert_box);
}

const level4_1 = document.getElementsByClassName("survived_by_thirst");

function point_box2(){
    const popupPoints = document.getElementsByClassName("point3");
    for (let i = 0; i < popupPoints.length; i++) {
        popupPoints[i].style.display = "block";
    }
}

for (let i = 0; i < level4_1.length; i++) {
    level4_1[i].addEventListener('click', point_box2);
}


const level5 = document.getElementsByClassName("treasure");

function treasure_box(){
    document.getElementById("popup_chest_treasure").style.display = "block";
}

for (let i = 0; i < level5.length; i++) {
    level5[i].addEventListener('click', treasure_box);
}

const level5_1 = document.getElementsByClassName("found_treasure");

function point_box3(){
    const popupPoints = document.getElementsByClassName("point4");
    for (let i = 0; i < popupPoints.length; i++) {
        popupPoints[i].style.display = "block";
    }
}

for (let i = 0; i < level5_1.length; i++) {
    level5_1[i].addEventListener('click', point_box3);
}

function shuffleBoxes() {
    const boxesContainer = document.querySelector('.treasure-chests');
    const boxes = Array.from(boxesContainer.children);
    boxes.sort(() => Math.random() - 0.5);
    boxes.forEach(box => boxesContainer.appendChild(box));
}

document.addEventListener('DOMContentLoaded', function() {
    shuffleBoxes();
});

function shuffleBoxesLevel_1() {
    const boxesContainer1 = document.querySelector('.popup_1');
    for (let i = boxesContainer1.children.length; i >= 0; i--) {
        boxesContainer1.appendChild(boxesContainer1.children[Math.random() * i | 0]);
    }
}

function shuffleBoxesLevel_2() {
    const boxesContainer2 = document.querySelector('.popup_2');
    for (let i = boxesContainer2.children.length; i >= 0; i--) {
        boxesContainer2.appendChild(boxesContainer2.children[Math.random() * i | 0]);
    }
}

function shuffleBoxesLevel_3() {
    const boxesContainer3 = document.querySelector('.popup_3');
    for (let i = boxesContainer3.children.length; i >= 0; i--) {
        boxesContainer3.appendChild(boxesContainer3.children[Math.random() * i | 0]);
    }
}

function shuffleBoxesLevel_4() {
    const boxesContainer4 = document.querySelector('.popup_4');
    for (let i = boxesContainer4.children.length; i >= 0; i--) {
        boxesContainer4.appendChild(boxesContainer4.children[Math.random() * i | 0]);
    }
}

function buttonClick(){
    window.location.href = "treasure.html";
}


window.addEventListener('beforeunload', function() {
    localStorage.setItem('refreshingPage', 'true');
});



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
