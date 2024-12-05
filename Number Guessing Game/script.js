const number = document.querySelector('#numberInput');
const submitBtn = document.querySelector('#submitBtn');
const startBtn = document.querySelector('#startBtn');
const output = document.querySelector('.output');
const guesses = document.querySelector('.guesses');
const totalGuess = document.querySelector('.totalGuess');

function guessNum() {
    let randomNumber = Math.floor(Math.random() * 100);
    const guessesArr = [];

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let userInput = number.value;

        if (userInput < randomNumber) {
            console.log('Low');
            output.innerHTML = 'Low'
        }
        if (userInput > randomNumber) {
            console.log('High');
            output.innerHTML = 'High'
        }
        if (userInput == randomNumber) {
            console.log("Congrats! You Guessed right");
            output.innerHTML = 'You Guess right'

            startBtn.disabled = false;
            submitBtn.disabled = true;

            let total = (guessesArr.length) + 1;

            totalGuess.textContent = 'Your total guesses are: ' + total;

        }

        guessesArr.push(userInput);
        console.log(guessesArr)

        guesses.textContent = 'Your Guesses are: ' + guessesArr.join(',');

        number.value = ''
    })

}

guessNum();
