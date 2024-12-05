let accordions = document.querySelectorAll('.accordion');
let headings = document.querySelectorAll('.heading');
let contents = document.querySelectorAll('.content');
let arrows = document.querySelectorAll('.bx');

headings.forEach((heading, index) => {
    heading.addEventListener('click', (e) => {
        contents[index].classList.toggle('active');
        arrows[index].classList.toggle('bxs-up-arrow')
    })
})