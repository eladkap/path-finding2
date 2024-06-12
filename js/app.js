class Application {
  constructor() {
    console.log('app ctor');
    this.grid = null;
    this.gridContainer = document.getElementById('grid-container');
    this.startVertex = null;
    this.endVertex = null;
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
    this.startVertex = this.grid.getVertex(START_VERTEX_ROW, START_VERTEX_COL);
  }

  setEndVertex() {
    // this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setLabel(END_VERTEX);
    this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setBackcolor(END_VERTEX_BACKCOLOR);
    this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL).setVertexType(END_VERTEX);
    this.endVertex = this.grid.getVertex(END_VERTEX_ROW, END_VERTEX_COL);
  }

  chooseVertex(row, col) {
    let vertex = this.grid.getVertex(row, col);
    this.chosenVertex = vertex;
    if (vertex == this.startVertex || vertex == this.endVertex) {
      vertex.setChosen(!vertex.isChosen());
    }
    else if (vertex.getVertexType() == WALL_VERTEX) {
      vertex.setVertexType(BLANK_VERTEX);
    }
    else {
      if (this.startVertex.isChosen()) {
        this.startVertex.setChosen(false);
        vertex.setVertexType(START_VERTEX);
        this.startVertex.setVertexType(BLANK_VERTEX);
        this.startVertex = vertex;
      }
      else if (this.endVertex.isChosen()) {
        this.endVertex.setChosen(false);
        vertex.setVertexType(END_VERTEX);
        this.endVertex.setVertexType(BLANK_VERTEX);
        this.endVertex = vertex;
      }
      else {
        vertex.setVertexType(WALL_VERTEX);
      }
    }
  }

  onClickVertex(event) {
    let cellDiv = event.target;
    let row = cellDiv.getAttribute('row');
    let col = cellDiv.getAttribute('col');
    this.chooseVertex(row, col);
  }
}
