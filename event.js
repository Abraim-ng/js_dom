// DOM Manipulation

// Event Listeners

// Element.addEventListener('click', function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love javascript')
}

buttonTwo.addEventListener("click", alertBtn); 


// Mousehover

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'red';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor)