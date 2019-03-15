const _ = require("lodash");
const Util = require("./util");
const Tetrad = require('./tetrad');


class Board {
  constructor() {
    this.rows = 16;
    this.columns = 10;
    this.baseColor = "grey";
    this.board = Array(16).fill(null).map(() => Array(10).fill(this.baseColor));
  }
  
  drawBoard(c) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        Util.drawUnitSquare(j, i, this.board[i][j], c);
      }
    }
  }
}

module.exports = Board;





