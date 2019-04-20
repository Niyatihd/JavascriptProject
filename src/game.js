const _ = require("lodash");
const Board = require('./board');
const Tetrad = require('./tetrad');
const tetradBlocks = require('./tetrad_blocks');
const Util = require('./util');
const animate = require('./util');

class Game {
  constructor() {
    this.activeTetrad = new Tetrad();
    this.newBoard = new Board();
    this.tetradMoves = this.tetradMoves.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.gameOver = false;
    this.score = 0;
    this.moveDownKeyActive = true;
    this.pause = false;
  }

  togglePause() {
    if (this.pause === true) {
      this.pause = false;
    } else if (this.pause === false) {
      this.pause = true;
    }
  }

  updateScore() {
    let scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = "Score: " + this.score;
  }

  updateNextTetrad() {
    let nextTetrad = Tetrad.randomTetrads[Tetrad.randomTetrads.length - 1][0];
    Util.drawNextTetrad(nextTetrad);
  }

  removeNextTetrad() {
    Util.undrawNextTetrad();
  }

  render() {
    this.newBoard.drawBoard();
    this.activeTetrad.drawTetrad();
    this.updateScore();
    this.removeNextTetrad();
    this.updateNextTetrad();
  }

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
    let nextTetradRotation = this.activeTetrad.tetrad[(this.activeTetrad.currentRotation + 1) % this.activeTetrad.tetrad.length];
    let shift = 0;

    if (this.collision(0, 0, nextTetradRotation)) {

      if (this.activeTetrad.xOffset > 5) {
        shift = -1;
      } else {
        shift = 1;
      }
    }

    if (!this.collision(shift, 0, nextTetradRotation)) {
      this.activeTetrad.removePrev();
      this.activeTetrad.xOffset += shift;
      this.activeTetrad.currentRotation = (this.activeTetrad.currentRotation + 1) % this.activeTetrad.tetrad.length;
      this.activeTetrad.currentTetrad = this.activeTetrad.tetrad[this.activeTetrad.currentRotation];
      this.activeTetrad.drawTetrad();
    }
  }

  stackTetrad() {
    for (let i = 0; i < this.activeTetrad.currentTetrad.length; i++) {
      for (let j = 0; j < this.activeTetrad.currentTetrad.length; j++) {
        if (!this.activeTetrad.currentTetrad[i][j]) {
          continue;
        } else if (this.activeTetrad.yOffset + i < 0) {
          // alert("Game Over");
          this.gameOver = true;
          break;
        }
        if (this.activeTetrad.currentTetrad[i][j]) {
          let idxJ = this.activeTetrad.xOffset + j;
          let idxI = this.activeTetrad.yOffset + i;
          this.newBoard.grid[idxI][idxJ] = "yellow";
        }
      }
    }
  }

  addEmptyRow() {
    this.newBoard.grid.unshift(Array(10).fill(this.newBoard.baseColor));
  }

  rowStackFull() {
    for (let i = 0; i < this.newBoard.rows; i++) {
      let rowFull = true;
      for (let j = 0; j < this.newBoard.columns; j++) {
        if (this.newBoard.grid[i][j] === this.newBoard.baseColor) {
          rowFull = false;
        }
      }
      if (rowFull) {
        $('#canvas').trigger("click");
        this.newBoard.grid = this.newBoard.grid.slice(0, i).concat(this.newBoard.grid.slice(i + 1));
        this.addEmptyRow();
        this.score += 10;
        this.updateScore(this.score);
      }
    }
  }

  moveDown() {
    this.removeNextTetrad();
    this.updateNextTetrad();
    if (!this.collision(0, 1, this.activeTetrad.currentTetrad)) {
      this.activeTetrad.removePrev();
      this.activeTetrad.yOffset += 1;
      this.activeTetrad.drawTetrad();
    } else {
      this.stackTetrad();
      this.rowStackFull();
      this.newBoard.drawBoard();
      this.activeTetrad = new Tetrad();
    }
  }

  moveUp() {
    this.activeTetrad.yOffset -= 1;
  }

  tetradMoves(e) {
    e.preventDefault();
    switch (event.keyCode) {
      case 37:
        if (!this.collision(-1, 0, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveLeft();
          this.activeTetrad.drawTetrad();
        }
        break;
      case 38:
        this.rotateTetrad1();
        break;
      case 39:
        if (!this.collision(1, 0, this.activeTetrad.currentTetrad)) {
          this.activeTetrad.removePrev();
          this.activeTetrad.moveRight();
          this.activeTetrad.drawTetrad();
        }
        break;
      case 40:
        if (this.moveDownKeyActive) {
          this.moveDown();
        }
        if (this.gameOver) {
          this.moveDownKeyActive = false;
        }
        break;
      case 32:
        this.hardDrop();
        break;
    }
  }

  hardDrop() {
    while (!this.collision(0, 1, this.activeTetrad.currentTetrad)) {
      this.moveDown();
    }
  }

  gameOverDisplay() {
    let div = document.createElement("div");
    div.innerHTML = "GAME OVER";
    div.classList.add("game-over", "animated", "bounceInUp");

    let tetrisCanvasDiv = document.getElementsByClassName("tetris-canvas")[0];
    tetrisCanvasDiv.appendChild(div);
  }

  gamePausedDisplay() {
    let div = document.createElement("div");
    div.innerHTML = "GAME PAUSED";
    div.classList.add("game-paused", "animated", "zoomIn");

    let tetrisCanvasDiv = document.getElementsByClassName("tetris-canvas")[0];
    tetrisCanvasDiv.appendChild(div);
  }

}

module.exports = Game;

//DELETE
// window.newBoard = newBoard;
// window.currtetrad = currtetrad;
//DELETE