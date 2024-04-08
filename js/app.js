var grid;

// var container = document.getElementById('grid-container');

function createGrid() {
  grid = new Grid(GRID_ROWS, GRID_COLS);
}

function onClickCell(event) {
  let cellDiv = event.target;
  let row = cellDiv.getAttribute('row');
  let col = cellDiv.getAttribute('col');
  console.log(`Cell in position (${row},${col}) was chosen.`);
}

createGrid();

console.log(grid.getVertex(1, 1));
