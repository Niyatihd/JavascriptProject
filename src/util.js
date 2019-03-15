const Util = {
  drawUnitSquare(xOffset, yOffset, color, c) {
    let gridUnitSquare = 25;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    c.fillStyle = color;
    c.strokeStyle = "pink";
    c.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    c.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
  }
};

module.exports = Util;