class Vertex {
  constructor(row, col, domElement) {
    this.row = row;
    this.col = col;
    this.domElement = domElement;
    this.backcolor = 'white';
    this.label = '';
    this.visited = false;
    this.focused = false;
    this.chosen = false;
    this.fValue = 0;
    this.gValue = 0;
    this.hValue = 0;
    this.vertexType = BLANK_VERTEX;
    this.parent = null;
    this.distance = 0;
    this.neighbors = { right: null, left: null, top: null, bottom: null };
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
    this.domElement.textContent = label;
  }

  getBackcolor() {
    return this.backcolor;
  }

  setBackcolor(backcolor) {
    this.backcolor = backcolor;
    this.domElement.style.background = backcolor;
  }

  isVisited() {
    return this.visited;
  }

  isFocused() {
    return this.focused;
  }

  isChosen() {
    return this.chosen;
  }

  setVisited(value) {
    this.visited = value;
  }

  setFocus(value) {
    this.focused = value;
  }

  setChosen(value) {
    this.chosen = value;
  }

  getFValue() {
    return this.fValue;
  }

  setFValue(f) {
    this.fValue = f;
  }

  getGValue() {
    return this.fValue;
  }

  setGValue(g) {
    this.fValue = g;
  }

  getHValue() {
    return this.hValue;
  }

  setHValue(h) {
    this.hValue = h;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent) {
    this.parent = parent;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(d) {
    this.distance = d;
  }

  getNeighbors() {
    return this.neighbors;
  }

  getNeighbor(direction) {
    return this.neighbors[direction];
  }
}
