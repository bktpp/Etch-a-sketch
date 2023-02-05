const flexContainer = document.createElement('div');
flexContainer.style.display = 'flex';
flexContainer.style.flexWrap = 'wrap';
flexContainer.style.width = '452px';
flexContainer.style.border = '2px red solid';
flexContainer.style.justifyContent = 'center';

/* const babyDivsSize = Math.floor(flexContainer.offsetWidth / 16); 

           This caused box's to collapse, why?  */

for (let i = 0; i < 256; i++) {
    const babyDivs = document.createElement('div');
    babyDivs.style.height = '25px';
    babyDivs.style.width = '25px';
    babyDivs.style.backgroundColor = 'limegreen';
    babyDivs.style.border = '2px black solid';
    flexContainer.appendChild(babyDivs);
    babyDivs.addEventListener('mouseover', function() {
        babyDivs.style.backgroundColor = 'red';
    });
}

/* */

document.body.appendChild(flexContainer);

document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';