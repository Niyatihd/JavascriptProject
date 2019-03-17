const _ = require("lodash");
const Board = require('./board');
const Tetrad = require('./tetrad');
const tetradBlocks = require('./tetrad_blocks');
const Util = require('./util');

class Game {
  constructor() {
    this.activeTetrad = new Tetrad();
    this.tetrad = this.activeTetrad.tetrad;
    this.currentRotation = this.activeTetrad.currentRotation;
    this.currentTetrad = this.tetrad[this.currentRotation];
    this.newBoard = new Board();
    this.tetradMoves = this.tetradMoves.bind(this);
    this.gameOver = false;
  }

  render() {
    this.newBoard.drawBoard();
    this.activeTetrad.drawTetrad();
  }




  // collision (x, y, currentTetrad) {
  //   for (let r = 0; r < currentTetrad.length; r++) {
  //     for (let c = 0; c < currentTetrad.length; c++) {
  //       // if the square is empty, we skip it
  //       if (!currentTetrad[r][c]) {
  //         continue;
  //       }
  //       // coordinates of the currentTetrad after movement
  //       let newX = this.activeTetrad.xOffset + c + x;
  //       let newY = this.activeTetrad.yOffset + r + y;

  //       // conditions
  //       if (newX < 0 || newX >= 10 || newY >= 20) {
  //         return true;
  //       }
  //       // skip newY < 0; board[-1] will crush our game
  //       if (newY < 0) {
  //         continue;
  //       }
  //       // check if there is a locked currentTetrad already in place
  //       if (this.newBoard.grid[newY][newX] !== "black") {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  collision(nextX, nextY, currentTetrad) {
      let currPosX = this.activeTetrad.xOffset;
      let currPosY = this.activeTetrad.yOffset;
      let cols = this.newBoard.columns; //10
      let rows = this.newBoard.rows; //20

      for (let i = 0; i < currentTetrad.length; i++) {
        for (let j = 0; j < currentTetrad.length; j++) {
          let nextPosX = currPosX + j + nextX;
          let nextPosY = currPosY + i + nextY;

          if (!currentTetrad[i][j]) { //check if tetrad cell === 0
            continue;
          }
          if (nextPosY < 0) {
            continue;
          }

          if (nextPosX >= cols || nextPosX < 0 || nextPosY >= rows) { //check walls
            return true;
          }
          if (this.newBoard.grid[nextPosY][nextPosX] !== this.newBoard.baseColor) { //check adjacent cell to be empty and on board
            return true;
          }
        }
      }
    }

  rotateTetrad1() {
    let nextTetradRotation = this.tetrad[(this.currentRotation + 1) % this.tetrad.length];
    let shift = 0;
    
    if (this.collision(0, 0, nextTetradRotation)) {
      
      if (this.activeTetrad.xOffset > 5) {
        shift = -1;
      } else {
        shift = 1; 
      }
    } 

    if (!this.collision(shift, 0, nextTetradRotation)) {
      // debugger
      this.activeTetrad.removePrev();
      this.activeTetrad.xOffset += shift;
      this.activeTetrad.currentRotation = (this.currentRotation + 1) % this.tetrad.length;
      this.activeTetrad.currentTetrad = this.tetrad[this.activeTetrad.currentRotation];
      this.currentTetrad = this.activeTetrad.currentTetrad;
      this.currentRotation = this.activeTetrad.currentRotation;
      this.activeTetrad.drawTetrad();
    }
  }


  //  stackTetrad() {
  //    for (let r = 0; r < this.activeTetrad.currentTetrad.length; r++) {
  //      for (let c = 0; c < this.activeTetrad.currentTetrad.length; c++) {
  //        // we skip the vacant squares
  //        if (!this.activeTetrad.currentTetrad[r][c]) {
  //          continue;
  //        }
  //        // pieces to lock on top = game over
  //        if (this.activeTetrad.yOffset + r < 0) {
  //          alert("Game Over");
  //          // stop request animation frame
  //          gameOver = true;
  //          break;
  //        }
  //        // we lock the piece
  //       //  debugger
  //        this.newBoard.grid[this.activeTetrad.yOffset + r][this.activeTetrad.xOffset + c] = "yellow";
  //      }
  //    }
  //  }

  stackTetrad() {
    for (let i = 0; i < this.activeTetrad.currentTetrad.length; i++) {
      for (let j = 0; j < this.activeTetrad.currentTetrad.length; j++) {
        if (!this.activeTetrad.currentTetrad[i][j]) {
          continue;
        } else if (this.activeTetrad.yOffset + i < 0) {
          alert("Game Over");
          this.gameOver = true;
          break;
        }
        if (this.currentTetrad[i][j]) {
          // debugger
          let idxJ = this.activeTetrad.xOffset + j;
          let idxI = this.activeTetrad.yOffset + i;
          this.newBoard.grid[idxI][idxJ] = "yellow";
          // this.newBoard.drawBoardStack(idxI, idxJ);
        }
      }
    }
  }
 


  tetradMoves(e) {
    e.preventDefault();
    switch (event.keyCode) {
      case 37:
        if (!this.collision(-1, 0, this.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveLeft();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 38:
        this.rotateTetrad1();
      break;
      case 39:
        if (!this.collision(1, 0, this.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveRight();
          this.activeTetrad.drawTetrad();
        }
      break;
      case 40:
      if (!this.collision(0, 1, this.currentTetrad)) {
        // debugger
          this.activeTetrad.removePrev();
          this.activeTetrad.moveDown();
          this.activeTetrad.drawTetrad();
          document.getElementById('t-body').click();
          // $('#t-body').trigger("click");
        } else {
          this.stackTetrad();
          this.activeTetrad = new Tetrad();
          this.tetrad = this.activeTetrad.tetrad;
          this.currentRotation = this.activeTetrad.currentRotation;
          this.currentTetrad = this.tetrad[this.currentRotation];
        }
      break;
    }
  }
  
}


// const gameex = new Game();
// window.gameex = gameex;
// const x = new Game
// window.x = x;
module.exports = Game;

//DELETE
// window.newBoard = newBoard;
// window.currtetrad = currtetrad;
//DELETE