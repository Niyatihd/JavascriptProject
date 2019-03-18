const _ = require("lodash");
const Util = require("./util");
const tetradBlocks = require("./tetrad_blocks");

class Tetrad {
  constructor(options={}) {
    this.color = options.color || "yellow";
    this.xOffset = 4;
    this.yOffset = -3;
    this.tetrad = this.getRandomTetrad();//REVISE
    // this.tetrad = options.tetrad;
    this.currentRotation = 0;
    // this.currentTetrad = this.tetrad[1];
    this.currentTetrad = this.tetrad[this.currentRotation];
    // this.moveDown = this.moveDown.bind(this);
  }

  getRandomTetrad() {
    let tetrads = Object.keys(tetradBlocks);
    let randomtetrad = tetrads[Math.floor(Math.random() * tetrads.length)];
    return tetradBlocks[randomtetrad];
  }

  drawTetrad() {
    // debugger
    for (var i = 0; i < this.currentTetrad.length; i++) {
      for (var j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquareTetrad(this.xOffset + j, this.yOffset + i, this.color);
        }
      }
    }
  }
  
  removePrev() {
    for (var i = 0; i < this.currentTetrad.length; i++) {
      for (var j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquareBoard(this.xOffset + j, this.yOffset + i, "black");
        }
      }
    }
  }

  moveRight() {
    // if (!this.collision(1, 0)) {
    this.xOffset += 1;
    // }
  }

  moveLeft() {
    this.xOffset -= 1;
  }

//   moveDown() {
//     if (!this.collision(0, 1, this.activeTetrad.currentTetrad)) {
//       // debugger
//       this.activeTetrad.removePrev();
//       // this.activeTetrad.moveDown();
//       this.yOffset += 1;
//       this.activeTetrad.drawTetrad();
//       // document.getElementById('t-body').click();
//       // $('#t-body').trigger("click");
//     } else {
//       this.stackTetrad();
//       this.rowStackFull();
//       this.newBoard.drawBoard();
//       this.activeTetrad = new Tetrad();
//     }
// }

  updateTimer(deltaTime, callback) {
    this.timer += deltaTime;
    if (this.timer > this.interval) {
      this.moveDown(callback);
    }
  }

  rotateTetrad() {
    // debugger
    this.currentRotation = (this.currentRotation + 1) % this.tetrad.length;
    this.currentTetrad = this.tetrad[this.currentRotation];
  }

//   rotateTetradOnCollision() {
//     if (this.xOffset < 5) {
//       this.moveRight();
//     } else {
//       this.moveLeft();
//     }
//   }
}

// const currtetrad = new Tetrad({color:"purple", tetrad: tetradBlocks.zBlock});
// currtetrad.drawTetrad();

//DELETE
// window.Tetrad = Tetrad;
// window.currtetrad = currtetrad;
//DELETE

module.exports = Tetrad;
