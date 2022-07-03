let container = document.getElementById("container");
let button = document.querySelector('button')

let gridNumber = parseInt(prompt('enter a number', ''));

if (gridNumber > 100) {
    alert('enter a number not greater than 100');
} else if (gridNumber > 0 && gridNumber <= 100) {
    makeGrid();
} else if (gridNumber !== Number) {
    alert ('not a number');
} 

button.addEventListener('click', makeGrid)

function disableBtn () {(button => {
    button.disabled = true;
})
}

/* let grid = parseInt(prompt('Please enter a number', '64'))

function gridNumber () {
    let grid = parseInt(prompt('Please enter a number', '64'));
    if (grid > 0 && grid <= 100) {
        makeGrid();        
    } else if (grid > 100) {
        alert('enter a number not greater than 100');
    } else {
        alert ('not a number');
    }
    return;
}
 */

// if (gridNumber > 10x0) {
//     prompt('Enter a number not greater than 100')
// }

function makeGrid (number) {
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    for (c = 0; c < (number*number); c++) {
        let cell = document.createElement('div');
        cell.classList.add ("grid-box");
        cell.addEventListener('mouseover', cell)
        container.appendChild(cell);
    }
    // document.querySelector("#container").innerHTML = `${number} x ${number}`; 
    return  
}

// if (gridNumber > 100) {
//     prompt('enter a number not greater than 100');
// } else if (gridNumber > 0 && gridNumber <= 100) {
//     makeGrid();
// } else {
//     prompt ('not a number')
// }

