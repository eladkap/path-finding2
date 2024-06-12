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
    this.neighbors = [];
    this.directions = { right: null, left: null, top: null, bottom: null };
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
    if (value) {
      if (this.vertexType == START_VERTEX) {
        this.setBackcolor(REDLIGHT);
      }
      else if (this.vertexType == END_VERTEX) {
        this.setBackcolor(GREENLIGHT);
      }
    }
    else {
      if (this.vertexType == START_VERTEX) {
        this.setBackcolor(RED);
      }
      else if (this.vertexType == END_VERTEX) {
        this.setBackcolor(GREEN);
      }
    }
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

  getVertexType() {
    return this.vertexType;
  }

  setVertexType(type) {
    this.vertexType = type;
    if (type == START_VERTEX) {
      this.setBackcolor(getComputedStyle(document.body).getPropertyValue('--start-vertex-backcolor'));
    }
    else if (type == END_VERTEX) {
      this.setBackcolor(getComputedStyle(document.body).getPropertyValue('--end-vertex-backcolor'));
    }
    else if (type == BLANK_VERTEX) {
      this.setBackcolor(getComputedStyle(document.body).getPropertyValue('--blank-backcolor'));
    }
    else if (type == WALL_VERTEX) {
      this.setBackcolor(getComputedStyle(document.body).getPropertyValue('--wall-backcolor'));
    }
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

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}
