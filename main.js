const spanText = document.querySelector('.js');
const spnCursor = document.querySelector('.cursor');
const txt = 'for the community';     

let indexText = 0; 

const addLetter = () => {
    spanText.textContent += txt[indexText]; 
    indexText++; 
    if (indexText === txt.length ){
        clearInterval(indexTyping); 
    }
}; 

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
};
const indexTyping = setInterval(addLetter, 50);

setInterval(cursorAnimation, 400);