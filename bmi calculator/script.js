let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let calBtn = document.querySelector('#calculate');
let output = document.querySelector('.output');


calBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let hVal = height.value;
    let wVal = weight.value;

    let calcBMI = wVal / (hVal / 100 * hVal / 100);
    let bmi = calcBMI.toFixed(2);

    if (hVal == '' || wVal == '') {
        alert('Please enter all the fields');
    }
    else if (bmi < 18.5) {
        output.innerHTML = "Your BMI is: " + bmi + ". You are Underweight."
    }
    else if (bmi >= 18.5 && bmi <= 25) {
        output.innerHTML = "Your BMI is: " + bmi + ". You are Normal."
    }
    else {
        output.innerHTML = "Your BMI is: " + bmi + ". You are Overweight."
    }

    height.value = '';
    weight.value = '';



})
