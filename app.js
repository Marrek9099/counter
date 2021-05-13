const number = document.querySelector('.number');

const buttons = document.querySelectorAll('button');



const changeColor = number => number.innerHTML > 0? number.style.color = 'green' : number.innerHTML < 0 ?  number.style.color = 'red' : number.style.color = 'black';


buttons[0].addEventListener('click', () => {
    number.innerText = parseInt(number.innerHTML) - 1;
    changeColor(number);
});
buttons[1].addEventListener('click', () => {
    number.innerText = 0;
    changeColor(number)
});
buttons[2].addEventListener('click', () => {
    number.innerText = parseInt(number.innerHTML) + 1;
    changeColor(number)
});