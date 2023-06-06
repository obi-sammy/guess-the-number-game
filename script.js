"use strict";
let score = 20;
let highScore = 0;

//all variables and elements for the game
const btnPlayAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const scoreEL = document.querySelector(".score");
const highScoreEL = document.querySelector(".highscore");
const message = document.querySelector(".message");
const body =  document.querySelector(".body");
const number = document.querySelector(".number");
const checkBtn = document.getElementById('check-btn');

//Generating random number
const randomNumber = Math.floor(Math.random() * 100)+1;

// used this to test if randomNumber is correct
console.log(randomNumber)

//assigning random number to the hidden number element
number.value = randomNumber;

//assigning score to elements
scoreEL.textContent = score;
highScoreEL.textContent = highScore;

//adding eventlistener that listens for a click and runs the onClick() function
checkBtn.addEventListener('click', onClick)

function onClick() {
    //grabs the guessed number from the input field
    const guessedNumber = document.getElementById('guess-number-input').valueAsNumber

    //checks if the guessed number is equals to the random number and updates the UI
    if(guessedNumber === randomNumber) {
        body.className += ' background-green'
        message.textContent = '🎉Correct Number!'

        if(highScoreEL.textContent < scoreEL.textContent){
            highScoreEL.textContent = scoreEL.textContent
        }
    }
}


