var grid;

// var container = document.getElementById('grid-container');

function createGrid() {
  grid = new Grid(GRID_ROWS, GRID_COLS);
}

function setStartVertex() {
  grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setLabel(START_VERTEX);
}

function setEndVertex() {
  grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setLabel(END_VERTEX);
}

function onClickCell(event) {
  let cellDiv = event.target;
  let row = cellDiv.getAttribute('row');
  let col = cellDiv.getAttribute('col');
  console.log(`Cell in position (${row},${col}) was chosen.`);
}

createGrid();
setStartVertex();
setEndVertex();

console.log(grid.getVertex(1, 1));
