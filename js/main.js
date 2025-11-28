// consts
const form = document.getElementById('guess__form');
const guessInput = document.getElementById('guess__input');
const guessButton = document.getElementById('guess__button');
const resultWin = document.getElementById('result__win');
const resultWinMessage = document.getElementById('result__win-message');
const resultLose = document.getElementById('result__lose');
const resultLoseMessage = document.getElementById('result__lose-message');
const restartButton = document.getElementById('restart__button');

// when the page is launched, computer generates a number
let randomNumber = Math.ceil(Math.random() * 10);

// storage
let guess = 0;
let attempts = 0;

// computer checks if the input value is equal to the randomly generated number

form.addEventListener("submit", checkNumber)

function checkNumber(e) {
    e.preventDefault();
    guess = parseInt(guessInput.value);
    attempts++;
    // if it is equal, the computer says you win. else the computer gives you a hint to say if the number is too high or too low so you can try again
    if (guess === randomNumber) {
        displayWin();
    } else if (attempts <= 3) {
        displayHint()
    } else {
        displayLose();
    }
}

function displayWin() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    resultLose.classList.add('hidden');
    resultWin.classList.remove('hidden');
    resultWinMessage.textContent = "Yay! You guessed the number " + randomNumber + " correctly!";
    restartButton.classList.remove('hidden');
}

function displayHint() {
    resultLose.classList.remove('hidden');
    if (guess < randomNumber) {
        resultLoseMessage.textContent = "Too low, try again";
    } else if (guess > randomNumber) {
        resultLoseMessage.textContent = "Too high, try again";
    } else {
        resultLoseMessage.textContent = "Invalid input, please enter a number";
    }
}

function displayLose() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    if (guess < randomNumber) {
        resultLoseMessage.textContent = "Too low! The number was " + randomNumber + ".";
    } else {
        resultLoseMessage.textContent = "Too high! The number was " + randomNumber + ".";
    }
    restartButton.classList.remove('hidden');

}

// computer automatically generates a new number for the game to restart again

restartButton.addEventListener("click", resetGame)

function resetGame() {
    randomNumber = Math.ceil(Math.random() * 10);
    attempts = 0;
    resultWinMessage.textContent = '';
    resultLoseMessage.textContent = '';
    guessInput.value = '';
    resultWin.classList.add('hidden');
    resultLose.classList.add('hidden');
    restartButton.classList.add('hidden');
    guessInput.disabled = false;
    guessButton.disabled = false;
}