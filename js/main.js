var app = new Application();

app.setup();

this.app.gridContainer.onmousedown = function(e) {
    app.onClickVertex(e);
}
