class Application {
  constructor() {
    console.log('app ctor');
    this.grid = null;
    this.gridContainer = document.getElementById('grid-container');
    this.chosenVertex = null;
  }

  setup() {
    this.createGrid();
    app.setStartVertex();
    app.setEndVertex();
  }

  createGrid() {
    console.log('create grid');
    this.grid = new Grid(GRID_ROWS, GRID_COLS);
  }

  setStartVertex() {
    // grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setLabel(START_VERTEX);
    this.grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setBackcolor(START_VERTEX_BACKCOLOR);
    this.grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL).setVertexType(START_VERTEX);
  }

  setEndVertex() {
    // this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setLabel(END_VERTEX);
    this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setBackcolor(END_VERTEX_BACKCOLOR);
    this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setVertexType(END_VERTEX);
  }

  onClickVertex(event) {
    let cellDiv = event.target;
    let row = cellDiv.getAttribute('row');
    let col = cellDiv.getAttribute('col');
    this.chosenVertex = this.grid.getVertex(row, col);
    this.chosenVertex.setChosen(!this.chosenVertex.isChosen());
  }
}
