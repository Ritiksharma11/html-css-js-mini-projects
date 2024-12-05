const inputBox = document.querySelector('.inputBox');
const output = document.querySelector('.output');
const palBtn = document.querySelector('.palBtn');
const factorialBox = document.querySelector('.factorialBox');
const factorialOut = document.querySelector('.factorialOut');
const facBtn = document.querySelector('.facBtn');

palBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let inputText = inputBox.value;

    let reverse = inputText.split('').reverse().join('');

    if (inputText === reverse) {
        output.innerHTML = "Palindrome"
    }
    else {
        output.innerHTML = "Not a Palindrome"
    }
    inputBox.value = '';
})


facBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let factNum = Number(factorialBox.value);

    if (factNum == 0 || factNum == 1) {
        factorialOut.innerHTML = 'Factorial is: ' + 1;
        console.log(1);
    }
    else {
        let fact = 1;
        for (let i = 1; i <= factNum; i++) {
            fact *= i;
        }
        factorialOut.innerHTML = 'Factorial is: ' + fact;
    }
    factorialBox.value = ''
})



