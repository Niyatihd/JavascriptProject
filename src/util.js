let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

const Util = {
  drawUnitSquare(xOffset, yOffset, color) {
    let gridUnitSquare = 25;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "pink";
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    // c.clearRect(X, Y, 15, 15);
    // c.strokeRect(X, Y, 25, 25);
  },
  drawUnitSquare2(xOffset, yOffset, color) {
    let gridUnitSquare = 25;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "pink";
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.clearRect(X, Y, 10, 10);
    c.strokeRect(X, Y, 25, 25);
  }
};

module.exports = Util;