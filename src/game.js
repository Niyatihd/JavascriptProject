const _ = require("lodash");
const Board = require('./board');
const Tetrad = require('./tetrad');
const tetradBlocks = require('./tetrad_blocks');
const Util = require('./util');

class Game {
  constructor() {
    this.activeTetrad = new Tetrad({
      color: "black",
      tetrad: tetradBlocks.zBlock
    });
    this.newBoard = new Board();
    this.tetradMoves = this.tetradMoves.bind(this);
  }

  render() {
    this.newBoard.drawBoard();
    this.activeTetrad.drawTetrad();
  }

  tetradMoves(e) {
    e.preventDefault();
    switch (event.keyCode) {
      case 37:
        if (!Util.collision(-1, 0, this.activeTetrad, this.activeTetrad.currentTetrad, this.newBoard)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveLeft();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 38:
        let nextTetradRotation = this.activeTetrad.tetrad[(this.activeTetrad.currentRotation+1) % this.activeTetrad.tetrad.length];
        if (!Util.collision(0, 0, this.activeTetrad, nextTetradRotation, this.newBoard)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.rotateTetrad();
          this.activeTetrad.drawTetrad();
        } else {
          this.activeTetrad.removePrev();
          this.activeTetrad.rotateTetradOnCollision();
          this.activeTetrad.rotateTetrad();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 39:
        if (!Util.collision(1, 0, this.activeTetrad, this.activeTetrad.currentTetrad, this.newBoard)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveRight();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 40:
        if (!Util.collision(0, 1, this.activeTetrad, this.activeTetrad.currentTetrad, this.newBoard)) {
          // debugger
          this.activeTetrad.removePrev();
          this.activeTetrad.moveDown();
          this.activeTetrad.drawTetrad();
          document.getElementById('t-body').click();
          // $('#t-body').trigger("click");
        } else {

        }
      break;
    }
  }
  
}


// const gameex = new Game();
// window.gameex = gameex;
const x = Game.activeTetrad;
window.x = x;
module.exports = Game;

//DELETE
// window.newBoard = newBoard;
// window.currtetrad = currtetrad;
//DELETE