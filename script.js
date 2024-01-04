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
        canvasContainer.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'red';
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



