
document.addEventListener('DOMContentLoaded', function(){
   createGrid(16);
});

// const dots = document.getElementsByClassName('dots');

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
    babyDivs.style.backgroundColor = getRandomColor()}) 
  }
  
} 

function colorPick(buttonClicked) {
    let color = 'white';
    if(buttonClicked === 'red') {
        color = 'red';
    } else if (buttonClicked === 'blue') {
        color = 'blue';
    } else if (buttonClicked === 'colorful'){
        
    } 
      return color
}

function getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return  "rgb(" + r + ", " + g + ", " + b + ")";
    }
 
   function clearBoard() {
    let divs = document.querySelectorAll('.dots');
    divs.forEach(function(divvy) {
        divvy.style.backgroundColor = 'white';
    })
  }

  function redColor() {
    let red = document.querySelectorAll('.dots');
    red.forEach(function(red2) {
        red2.addEventListener('mouseover', function() {
            red2.style.backgroundColor = 'red';});       
    })
  }

  function blackColor() {
    let black = document.querySelectorAll('.dots');
    black.forEach(function(black2) {
        black2.addEventListener('mouseover', function() {
            black2.style.backgroundColor = 'black';}); 
    })
  } 

  function colorful() {
    let random = document.querySelectorAll('.dots');
    random.forEach(function(random2) {
        random2.addEventListener('mouseover', function() {
         random2.style.backgroundColor = getRandomColor();})
    })
  } 
  