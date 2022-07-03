let container = document.getElementById("container");
let button = document.getElementById('btn')
let eraser = document.getElementById('eraser')

button.addEventListener('click', makeGrid);
button.addEventListener('click', disableBtn);
eraser.addEventListener('click', eraseGrid)

function makeGrid (number) {
    let gridNumber = parseInt(prompt('Enter number of Grids', ''))
    
    if (gridNumber > 0 && gridNumber <= 100) {
        makeGrid;        
    } else if (gridNumber > 100) {
        gridNumber = alert('Enter a number not greater than 100')
    } else {
        gridNumber = alert('This is not a number')
    }

    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;  
    
    for (c = 0; c < (gridNumber*gridNumber); c++) {
        let cell = document.createElement('div');
        cell.classList.add("grid-box");
        cell.addEventListener ('mousedown', changeColor  /* function onClick(event) {
            event.target.style.backgroundColor = 'salmon'
        } */); 
        container.appendChild(cell);
    }       
}

function disableBtn () {
    document.getElementById('btn').disabled = true;
}

function changeColor (e) {
    if(e.type = 'mousedown') {
        const randomR = Math.floor(Math.random()*256);
        const randomG = Math.floor(Math.random()*256)
        const randomB = Math.floor(Math.random()*256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomR})`
    }
    backgroundColor = 'black';
}

function eraseGrid () {
    changeColor(e) = 'white'
}