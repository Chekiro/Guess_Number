'use strict';

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof (guess));
    if (!guess) {
        displayMessage("🤷‍♀️ Not a Number");
    }
    else if (guess === hiddenNumber) {
        document.querySelector(".number").textContent = hiddenNumber;
        displayMessage("🎉 Correct Number");
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore)
        {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            }
    }
    else if (guess !== hiddenNumber)
    {
        if (score > 1)
        {
            document.querySelector(".message").textContent = guess > hiddenNumber ? " ↘ Your number is less" : "↗ Your number is greater";
            score--;
            document.querySelector(".score").textContent = score;
            
            
        }
        else {
            displayMessage("You lost the game 🤦‍♀️");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".guess").value = " ";
})

