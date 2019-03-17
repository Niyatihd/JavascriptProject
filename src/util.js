let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const Util = {
  drawUnitSquareBoard(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "#E7BFEC";
    c.setLineDash([4, 2]);
    c.lineDashOffset = 4;
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    // c.clearRect(X, Y, 15, 15);
    // c.strokeRect(X, Y, 25, 25);
  },

  drawUnitSquareTetrad(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "black";
    c.setLineDash([4, 2]);
    c.lineDashOffset = 4;
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.clearRect(X, Y, 30, 30);
    c.strokeRect(X, Y, 30, 30);
  }
};

module.exports = Util;