class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    this.create();
  }

  create() {
    this.container = document.getElementById('grid-container');

    for (let i = 0; i < GRID_ROWS; i++) {
      let row = [];
      for (let j = 0; j < GRID_COLS; j++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.setAttribute('row', i);
        cell.setAttribute('col', j);
        cell.textContent = '';

        cell.addEventListener('click', onClickCell);
        this.container.appendChild(cell);
        let vertex = new Vertex(i, j, cell);
        row.push(vertex);
      }
      this.matrix.push(row);
    }
  }

  getVertex(row, col) {
    return this.matrix[row][col];
  }
}
