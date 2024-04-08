class Vertex {
  constructor(row, col, domElement) {
    this.row = row;
    this.col = col;
    this.domElement = domElement;
    this.visited = false;
    this.focused = false;
    this.chosen = false;
    this.fValue = 0;
    this.gValue = 0;
    this.hValue = 0;
    this.parent = null;
    this.distance = 0;
    this.neighbors = { right: null, left: null, top: null, bottom: null };
  }

  setVisited(bool) {
    this.visited = bool;
  }
}
