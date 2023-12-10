// Generate a number between 1 and 100
const targetNumber = Math.floor(Math.random()*100)+1;

let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess >100) {
        message.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;
   

    if(userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
    } else {
        const hint = userGuess < targetNumber ? 'higher' : 'lower';
        message.textContent = `Try again! The correct number is ${hint}.`;
        message.style.color = 'red'
        }

    attemptsSpan.textContent = attempts;
}
