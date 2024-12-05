const clickBtn = document.querySelector('.click');
const closeBtn = document.querySelector('.close');
const popupBox = document.querySelector('.popupBox');

clickBtn.addEventListener('click', () => {
    popupBox.classList.add('display');
})

closeBtn.addEventListener('click', () => {
    popupBox.classList.remove('display');
})