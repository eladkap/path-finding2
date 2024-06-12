class Application {
  constructor() {
    console.log('app ctor');
    this.grid = null;
    this.gridContainer = document.getElementById('grid-container');
    this.startVertex = null;
    this.endVertex = null;
    this.chosenVertex = null;

    this.btnGenerateMaze = null;
    this.btnGenerateWalls = null;
    this.btnClearWalls = null;
    this.btnSearch = null;
    this.searchAlgoSelector = null;
    this.searchAlgo = null;
    this.algoSpeedSelector = null;
    this.algoSpeed = null;
    this.btnClearPath = null;
  }

  setup() {
    this.createGrid();
    app.setStartVertex();
    app.setEndVertex();
    this.setButtons();
    this.setSearchAlgoSelector();
    this.setAlgoSpeedSelector();
    this.setSearchAlgo();
    this.setAlgoSpeed();
  }

  createGrid() {
    console.log('create grid');
    this.grid = new Grid(GRID_ROWS, GRID_COLS);
  }

  setStartVertex() {
    // grid.get(START_VERTEX_ROW, START_VERTEX_COL).setLabel(START_VERTEX);
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

  setEnabledControls(b) {
    this.setEnabled(this.btnGenerateMaze, b);
    this.setEnabled(this.btnGenerateWalls, b);
    this.setEnabled(this.btnClearWalls, b);
    this.setEnabled(this.btnSearch, b);
    this.setEnabled(this.searchAlgoSelector, b);
    this.setEnabled(this.algoSpeedSelector, b);
    this.setEnabled(this.btnClearPath, b);
}

  onClickVertex(event) {
    let cellDiv = event.target;
    let row = cellDiv.getAttribute('row');
    let col = cellDiv.getAttribute('col');
    this.chooseVertex(row, col);
  }

  setButtons() {
    this.btnGenerateMaze = document.getElementById('a-generate-maze');
    this.btnGenerateWalls = document.getElementById('a-generate-walls');
    this.btnClearWalls = document.getElementById('a-clear-walls');
    this.btnSearch = document.getElementById('btn-visualize');
    this.btnClearPath = document.getElementById('a-clear-path');
  }

  setEnabled(control, value) {
    control.disabled = !value;
    let color = value ? 'var(--header-color)' : 'var(--header-color-disabled)';
    control.style.color = color;
  }

  setSearchAlgoSelector() {
    this.searchAlgoSelector = document.getElementById('search-algo-selector');
  }

  setAlgoSpeedSelector() {
      this.algoSpeedSelector = document.getElementById('algo-speed-selector');
  }

  setSearchAlgo() {
      this.searchAlgo = this.setSearchAlgoSelector.value;
  }

  setAlgoSpeed() {
      this.algoSpeed = this.setAlgoSpeedSelector.value;
  }

  chooseSearchAlgoOption(event) {
    this.searchAlgo = event.target.value;
    console.log(`Search algo chosen: ${this.searchAlgo}`);
  }

  chooseAlgoSpeed(event) {
      this.algoSpeed = event.target.value;
      this.setDelay();
      console.log(`Algo speed chosen: ${this.algoSpeed}`);
  }

  setDelay() {
      if (this.algoSpeed == 'fast') {
          DELAY_IN_MILLISEC = 1;
      }
      else if (this.algoSpeed == 'average') {
          DELAY_IN_MILLISEC = 10;
      }
      else {
          DELAY_IN_MILLISEC = 15;
      }
  }

  clearWalls() {
    this.grid.clearWalls();
  }

  generateWalls() {
    for (let vertex of this.grid.vertices) {
      if (
          vertex.getVertexType() != START_VERTEX &&
          vertex.getVertexType() != END_VERTEX
      ) {
        if (Math.random() < WALL_DENSITY) {
            vertex.setVertexType(WALL_VERTEX);
        } else {
            vertex.setVertexType(BLANK_VERTEX);
        }
      }
    }
  }

  async generateMaze() {
    this.setEnabledControls(false);
    await generateMazeRecursively(this.grid);
    this.setEnabledControls(true);
  }

  clearPath() {
    this.grid.reset();
  }

  async runSearch() {
    console.log('Run search');
    this.setEnabledControls(false);
    let result = await this.startSearch();
    console.log('Search finished');
    if (result) {
      console.log('Path found.');
      await this.showPath();
    } else {
      console.log('No path found.');
      window.alert('No path found.');
    }
    this.setEnabledControls(true);
  }

  async startSearch() {
      if (this.searchAlgoSelector.value == "BFS") {
          return await bfs(this.grid, this.startVertex, this.endVertex);
      } else if (this.searchAlgoSelector.value == "DFS") {
          return await dfs(this.grid, this.startVertex, this.endVertex);
      } else if (this.searchAlgoSelector.value == "A-star") {
          return await astar(this.grid, this.startVertex, this.endVertex);
      }
  }

  async showPath() {
      console.log("Show path...");
      let path = [];
      let v = this.endVertex;
      while (v != this.startVertex) {
          path.push(v);
          v = v.getParent();
      }
      for (let i = path.length - 1; i >= 0; i--) {
          let v = path[i];
          if (v != this.endVertex && v != this.startVertex) {
              await Utils.sleep(DELAY_IN_MILLISEC * 10);
              v.setBackcolor(YELLOW);
          }
      }
  }
}
