const countNum = document.querySelector('.countNum');
const dec = document.querySelector('#dec');
const inc = document.querySelector('#inc');
const reset = document.querySelector('#reset');

let count = 0;

dec.addEventListener('click', () => {
    if (count > -10) {
        count -= 1;
    }
    countNum.innerHTML = count;

})

inc.addEventListener('click', () => {
    if (count < 10) {
        count += 1;
    }

    countNum.textContent = count;
})


reset.addEventListener('click', () => {
    count = 0;
    countNum.textContent = count;
})