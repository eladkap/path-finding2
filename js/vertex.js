class Vertex {
  constructor(row, col, domElement) {
    this.row = row;
    this.col = col;
    this.domElement = domElement;
    this.label = label;
    this.visited = false;
    this.focused = false;
    this.chosen = false;
    this.parent = null;
    this.distance = 0;
    this.neighbors = { right: null };
  }

  setVisited(bool) {
    this.visited = bool;
  }
}
