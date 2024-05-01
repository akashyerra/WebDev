const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submt');
const userInput = document.querySelector('#guessNumber');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultSpace');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert("Please enter a number greater than 1");
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    //
}

function endGame() {
    //
}

function newGame() {
    //
}

