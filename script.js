
const grid = document.querySelector('.grid');
//const navi = document.querySelector('.navigation');
const newBtn = document.querySelector('#new-grid');
const randBtn = document.querySelector('#random-color');
const darkBtn = document.querySelector('#darken-cells');
const solidBtn = document.querySelector('#solid-fill');

let colorStyle = 'darken';
let size = 16;

let createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
        let gridDiv = document.createElement('div');
        let gridWidth = grid.getBoundingClientRect().width;
        let gridHeight = grid.getBoundingClientRect().height;
        gridDiv.style.width = gridWidth / size;
        gridDiv.style.height = gridHeight / size;
        gridDiv.setAttribute('class', 'cell');
        gridDiv.addEventListener('mouseover', changeColor);
        grid.appendChild(gridDiv);
        };
    };
};

let makeNewGrid = () => {
    let userSize = window.prompt('Enter size for new grid', '(between 16 - 64)');
    if (isNaN(userSize) || userSize < 16 || userSize > 64) {
        alert('The number that was selected is invalid.');
    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
            console.log('removesChild')       
        };
    };
    createGrid(userSize);
   
};

let solidColor = (e) => {
    if (e.target.className === 'cell') {
        e.target.style.opacity = '1';
        e.target.style.background = 'black';

    };
};

let randomColor = (e) => {
    if (e.target.className === 'cell') {
        let hue =  'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
        + ')';
        e.target.style.opacity = '1';
        e.target.style.background = hue;
    };
};

function darkenCells(e) {
    if (e.target.className == "cell") {

        if (e.target.style.opacity < 1 && e.target.style.backgroundColor != "black") {
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
  
        } else if (e.target.style.opacity == 1 & e.target.style.backgroundColor != "black") {
            e.target.style.backgroundColor = "black";
            e.target.style.opacity = 0.1;
  
        } else if (e.target.style.opacity < 1 && e.target.style.backgroundColor == "black") {
            e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
  
        } else if (e.target.style.opacity == 1 && e.target.style.backgroundColor == "black") {
            return;
        };
    };
};

function changeColor(e) {
    if (colorStyle == 'solid') {
        solidColor(e);
    } else if (colorStyle == 'random') {
        randomColor(e);
    } else if (colorStyle == 'darken') {
        darkenCells(e);
    } else {
        darkenCells(e);
    };
};

solidBtn.addEventListener('click', () => {
    colorStyle = 'solid';
});

randBtn.addEventListener('click', () => {
    colorStyle = 'random';
});

darkBtn.addEventListener('click', () => {
    colorStyle = 'darken';
});

newBtn.addEventListener('click', () => {
    makeNewGrid();
});


createGrid(size);
