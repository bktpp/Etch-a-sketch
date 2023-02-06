
document.addEventListener('DOMContentLoaded', function(){
   createGrid(16);
});



const dots = document.getElementsByClassName('dots');

function createGrid(size) {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let requestedDivs = size * size;

for (let i = 0; i < requestedDivs; i++) {
    let babyDivs = document.createElement('div');
    babyDivs.classList.add('dots');
    babyDivs.style.borderRadius = '50%';
    gridContainer.insertAdjacentElement('beforeend', babyDivs);
    babyDivs.addEventListener('mouseover', function() {
    babyDivs.style.backgroundColor = getRandomColor();})    
  }
} 

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

   function clearBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white')
  }










/*
for (let i = 0; i < 256; i++) {
    const babyDivs = document.createElement('div');
    babyDivs.style.backgroundColor = 'limegreen';
    babyDivs.style.border = '1px solid red';
    babyDivs.style.textAlign = 'center';
    gridContainer.appendChild(babyDivs);
    babyDivs.addEventListener('mouseover', function() {
        babyDivs.style.backgroundColor = 'red';
    });
}



/* 
const style = document.createElement('style');
style.textContent = `
    .grid {
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
        width: 100%;
        height: 100%;
    }
    
    .grid div {
        background-color: limegreen;
        border: 1px solid black;
    }    
    `;

    document.head.appendChild(style);




/* document.body.appendChild(flexContainer);

document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center'; */


