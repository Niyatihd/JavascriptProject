const _ = require("lodash");
const Board = require('./board');
const Tetrad = require('./tetrad');
const tetradBlocks = require('./tetrad_blocks');

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
        if (!this.collision(-1, 0, this.activeTetrad, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveLeft();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 38:
        let nextTetradRotation = this.activeTetrad.tetrad[(this.activeTetrad.currentRotation+1) % this.activeTetrad.tetrad.length];
        debugger
        if (!this.collision(0, 0, this.activeTetrad, nextTetradRotation)) {
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
        if (!this.collision(1, 0, this.activeTetrad, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveRight();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 40:
        if (!this.collision(0, 1, this.activeTetrad, this.activeTetrad.currentTetrad)) {
          // debugger
          this.activeTetrad.removePrev();
          this.activeTetrad.moveDown();
          this.activeTetrad.drawTetrad();
          document.getElementById('t-body').click();
          // $('#t-body').trigger("click");
        }
      break;
    }
  }
  
  collision(nextX, nextY, activeTetrad, currentTetrad) {
    let currPosX = activeTetrad.xOffset;
    let currPosY = activeTetrad.yOffset;
    let cols = this.newBoard.columns;//10
    let rows = this.newBoard.rows;//20

    for (let i = 0; i < currentTetrad.length; i++) {
      for (let j = 0; j < currentTetrad.length; j++) {
        // debugger
        let nextPosX = currPosX + j + nextX;
        let nextPosY = currPosY + i + nextY;

        if (!currentTetrad[i][j]) { //check if tetrad cell === 0
          continue;
        } else if (nextPosX >= cols || nextPosX < 0 || nextPosY > rows) { //check walls
          return true;
        } else if (this.newBoard.grid[nextPosY][nextPosX] !== this.newBoard.baseColor) { //check adjacent cell to be empty and on board
          return true;
        } 
      }
    }
  // collision(nextX, nextY) {
  //   let currPosX = this.activeTetrad.xOffset;
  //   let currPosY = this.activeTetrad.yOffset;
  //   let cols = this.newBoard.columns;//10
  //   let rows = this.newBoard.rows;//20

  //   for (let i = 0; i < this.activeTetrad.currentTetrad.length; i++) {
  //     for (let j = 0; j < this.activeTetrad.currentTetrad.length; j++) {
  //       // debugger
  //       let nextPosX = currPosX + j + nextX;
  //       let nextPosY = currPosY + i + nextY;

  //       if (!this.activeTetrad.currentTetrad[i][j]) { //check if tetrad cell === 0
  //         continue;
  //       } else if (nextPosX >= cols || nextPosX < 0 || nextPosY > rows) { //check walls
  //         return true;
  //       } else if (this.newBoard.grid[nextPosY][nextPosX] !== this.newBoard.baseColor) { //check adjacent cell to be empty and on board
  //         return true;
  //       } 
  //     }
  //   }

    return false;
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