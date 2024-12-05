const body = document.querySelector('body');

function setColor(color) {
    body.style.backgroundColor = color;
}

function setRandom() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    let randomColor = `rgb(${red},${green},${blue})`;

    body.style.backgroundColor = randomColor;
}

setRandom();