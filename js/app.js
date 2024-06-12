var grid;

// var container = document.getElementById('grid-container');

function createGrid() {
  grid = new Grid(GRID_ROWS, GRID_COLS);
}

function setStartVertex() {
  // grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setLabel(START_VERTEX);
  grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setBackcolor(START_VERTEX_BACKCOLOR);
  grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setVertexType(START_VERTEX);
}

function setEndVertex() {
  // grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setLabel(END_VERTEX);
  grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setBackcolor(END_VERTEX_BACKCOLOR);
  grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setVertexType(END_VERTEX);
}

function onClickCell(event) {
  let cellDiv = event.target;
  let row = cellDiv.getAttribute('row');
  let col = cellDiv.getAttribute('col');
  let vertex = grid.getVertex(row, col);
  vertex.setChosen(!vertex.isChosen());
}

createGrid();
setStartVertex();
setEndVertex();

console.log(grid.getVertex(1, 1));
