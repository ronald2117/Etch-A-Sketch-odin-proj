const changeSizeBtn = document.querySelector('.change-size-btn');
const canvasContainer = document.querySelector('.canvas-container');

let squarePerSide = 16;

function displayCells(width) {
    const squareNum = width * width;
    for (let i = 1; i <= squareNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('.canvas-cells');
        cell.style.width = (canvasContainer.offsetWidth - 4) / width + 'px';
        cell.style.height = (canvasContainer.offsetHeight - 4) / width + 'px';
        cell.style.backgroundColor = 'white';
        cell.style.filter = 'brightness(100%)';
        canvasContainer.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            let randRedVal = Math.floor(Math.random() * 256);
            let randGreenVal = Math.floor(Math.random() * 256);
            let randBlueVal = Math.floor(Math.random() * 256);
            let randColor = `rgb(${randRedVal}, ${randGreenVal}, ${randBlueVal})`
            if(cell.style.backgroundColor == 'white'){
                cell.style.backgroundColor = randColor;
            } else {
                sqBrightness = cell.style.filter.match(/\d+/);
                cell.style.filter = `brightness(${sqBrightness - 10}%)`
            }
        });
    }
}

changeSizeBtn.addEventListener('click', () => {
    nSquares = prompt("Enter the square by side\n It must be greater then zero and less than or equal to 64");

    if (nSquares <= 0 || nSquares > 64) {
        alert("It must be greater then zero and less than or equal to 64");
        return
    }

    removeAllSq();
    displayCells(nSquares);
})

function removeAllSq() {
    while(canvasContainer.firstChild) {
        canvasContainer.removeChild(canvasContainer.lastChild);
    }
}

displayCells(squarePerSide);



