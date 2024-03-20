//Function to display final score
function displayScore() {
    var score = parseInt(localStorage.getItem('score')) || 0;
    var praiseMessage = getPraiseMessage(score);
    localStorage.removeItem('score'); // Always clear the score from localStorage
    document.getElementById('scoreDisplay').innerHTML = praiseMessage;
}


    document.getElementById('reset-btn').addEventListener('click',function() {
        window.location.href="index.html";
    });


function getPraiseMessage(score) {
    if (score >= 2000) {
        return "Wow! You're a champion! You scored " + score + " points!";
    } else if (score >= 500) {
        return "Great job! You scored " + score + " points!";
    } else if (score >= 200) {
        return "Well done! You scored " + score + " points!";
    } else {
        return "Nice try! You scored " + score + " points!";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayScore();
});