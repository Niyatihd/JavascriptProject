const _ = require("lodash");
const Util = require("./util");
const Tetrad = require('./tetrad');


class Board {
  constructor() {
    this.rows = 20;
    this.columns = 10;
    this.baseColor = "black";
    this.grid = Array(20).fill(null).map(() => Array(10).fill(this.baseColor));
  }
  
  drawBoard() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        Util.drawUnitSquareBoard(j, i, this.grid[i][j]);
      }
    }
  }

  drawBoardStack(i, j) {
    Util.drawUnitSquareTetrad(j, i, this.grid[i][j]);
  }
}

module.exports = Board;





