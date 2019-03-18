let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let canvasNextTetrad = document.getElementById('canvas-next-tetrad');
let cN = canvasNextTetrad.getContext('2d');

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
  },

  drawUnitSquareTetradN(xOffset, yOffset, color) {
    let gridUnitSquare = 30;
    let X = gridUnitSquare * xOffset;
    let Y = gridUnitSquare * yOffset;
    cN.fillStyle = color;
    cN.strokeStyle = "black";
    cN.setLineDash([4, 2]);
    cN.lineDashOffset = 4;
    cN.fillRect(X, Y, gridUnitSquare, gridUnitSquare);
    cN.strokeRect(X, Y, gridUnitSquare, gridUnitSquare);
    cN.clearRect(X, Y, 30, 30);
    cN.strokeRect(X, Y, 30, 30);
  },

  // collision(nextX, nextY, activeTetrad, currentTetrad, newBoard) {
  //   let currPosX = activeTetrad.xOffset;
  //   let currPosY = activeTetrad.yOffset;
  //   let cols = newBoard.columns; //10
  //   let rows = newBoard.rows; //20

  //   for (let i = 0; i < currentTetrad.length; i++) {
  //     for (let j = 0; j < currentTetrad.length; j++) {
  //       let nextPosX = currPosX + j + nextX;
  //       let nextPosY = currPosY + i + nextY;

  //       if (!currentTetrad[i][j]) { //check if tetrad cell === 0
  //         continue;
  //       } 
  //       if (nextPosY < 0) { 
  //         continue;
  //       } 

  //       if (nextPosX >= cols || nextPosX < 0 || nextPosY >= rows) { //check walls
  //         return true;
  //       } 
  //       if (newBoard.grid[nextPosY][nextPosX] !== newBoard.baseColor) { //check adjacent cell to be empty and on board
  //         return true;
  //       }
  //     }
  //   }

  //   return false;
  // }

   drawNextTetrad(nextTetrad) {
     debugger
     for (var i = 0; i < nextTetrad.length; i++) {
       for (var j = 0; j < nextTetrad.length; j++) {
         if (nextTetrad[i][j]) {
           this.drawUnitSquareTetradN(this.xOffset + j, this.yOffset + i, this.color);
         }
       }
     }
   }
};

module.exports = Util;