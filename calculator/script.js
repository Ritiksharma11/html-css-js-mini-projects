const inputBox = document.querySelector('.inputBox');

function appendToDisplay(input) {
    inputBox.value += input;
}

function calculate() {
    try {
        result = eval(inputBox.value);
        inputBox.value = result;
    }
    catch (error) {
        inputBox.value = 'Error';
    }
}

function allClear() {
    inputBox.value = '';
}

function del() {
    deletedVal = inputBox.value.substring(0, (inputBox.value).length - 1);
    inputBox.value = deletedVal;
}