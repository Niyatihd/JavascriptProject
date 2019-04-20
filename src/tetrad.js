const _ = require("lodash");
const Util = require("./util");
const tetradBlocks = require("./tetrad_blocks");

class Tetrad {
  constructor(options = {}) {
    this.color = options.color || "yellow";
    this.xOffset = 4;
    this.yOffset = -3;
    this.tetrad = this.getNextTetrad();
    this.currentRotation = 0;
    this.currentTetrad = this.tetrad[this.currentRotation];
  }

  getRandomTetrads() {
    let tetrads = Object.keys(tetradBlocks);
    for (let i = 0; i < 3; i++) {
      let randomtetrad = tetrads[Math.floor(Math.random() * tetrads.length)];
      Tetrad.randomTetrads.unshift(tetradBlocks[randomtetrad]);
    }
  }
  getNextTetrad() {
    if (Tetrad.randomTetrads.length <= 1) {
      this.getRandomTetrads();
    }
    return Tetrad.randomTetrads.pop();
  }

  drawTetrad() {
    for (let i = 0; i < this.currentTetrad.length; i++) {
      for (let j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquareTetrad(this.xOffset + j, this.yOffset + i, this.color);
        }
      }
    }
  }

  removePrev() {
    for (let i = 0; i < this.currentTetrad.length; i++) {
      for (let j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquareBoard(this.xOffset + j, this.yOffset + i, "black");
        }
      }
    }
  }

  moveRight() {
    this.xOffset += 1;
  }

  moveLeft() {
    this.xOffset -= 1;
  }

  updateTimer(deltaTime, callback) {
    this.timer += deltaTime;
    if (this.timer > this.interval) {
      this.moveDown(callback);
    }
  }

  rotateTetrad() {
    this.currentRotation = (this.currentRotation + 1) % this.tetrad.length;
    this.currentTetrad = this.tetrad[this.currentRotation];
  }

}

//DELETE
// window.Tetrad = Tetrad;
// window.currtetrad = currtetrad;
//DELETE
Tetrad.randomTetrads = [];

module.exports = Tetrad;