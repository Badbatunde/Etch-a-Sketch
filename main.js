let container = document.getElementById("container");
let button = document.getElementById('btn')

button.addEventListener('click', makeGrid)
button.addEventListener('click', disableBtn)

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
        cell.classList.add ("grid-box");
        cell.addEventListener('mouseover', cell)
        container.appendChild(cell);
    }       
}

function disableBtn () {
    document.getElementById('btn').disabled = true;
}

