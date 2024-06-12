class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    this.create();
  }

  create() {
    this.vertices = [];
    this.container = document.getElementById('grid-container');

    for (let i = 0; i < GRID_ROWS; i++) {
      let row = [];
      for (let j = 0; j < GRID_COLS; j++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.setAttribute('row', i);
        cell.setAttribute('col', j);
        cell.textContent = '';

        cell.addEventListener('click', app.onClickCell);
        this.container.appendChild(cell);
        let vertex = new Vertex(i, j, cell);
        row.push(vertex);
        this.vertices.push(vertex);
      }
      this.matrix.push(row);
    }
  }

  getRows() {
    return this.rows;
  }

  getCols() {
    return this.cols;
  }

  getVertex(row, col) {
    return this.matrix[row][col];
  }

  setVertexType(i, j, vertexType) {
    this.matrix[i][j].setVertexType(vertexType);
  }

  clearWalls() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let vertex = this.matrix[i][j];
        if (vertex.vertexType == WALL_VERTEX) {
          vertex.setVertexType(BLANK_VERTEX);
        }
      }
    }
  }

  reset() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j].setVisited(false);
        if (this.matrix[i][j].getVertexType() == BLANK_VERTEX) {
          this.matrix[i][j].setBackcolor(WHITE);
        }
      }
    }
  }
}
