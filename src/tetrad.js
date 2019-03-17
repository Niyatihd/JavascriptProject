const _ = require("lodash");
const Util = require("./util");
const tetradBlocks = require("./tetrad_blocks");

class Tetrad {
  constructor(options={}) {
    this.color = options.color || "yellow";
    this.xOffset = 4;
    this.yOffset = 2;
    // this.tetrad = this.getRandomTetrad();//REVISE
    this.tetrad = options.tetrad;
    this.currentRotation = 0;
    // this.currentTetrad = this.tetrad[1];
    this.currentTetrad = this.tetrad[this.currentRotation];
  }

  getRandomTetrad() {
    let tetrads = Object.keys(tetradBlocks);
    let randomtetrad = tetrads[Math.floor(Math.random() * tetrads.length)];
    return randomtetrad;
  }

  drawTetrad() {
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

  moveDown() {
    this.yOffset += 1;
  }

  rotateTetrad() {
    this.currentRotation = (this.currentRotation + 1) % this.tetrad.length;
    this.currentTetrad = this.tetrad[this.currentRotation];
  }

  // collision(nextX, nextY) {
  //   let currPosX = this.xOffset;
  //   let currPosY = this.yOffset;
  //   let cols = 10; //10
  //   let rows = 20; //20

  //   for (let i = 0; i < this.currentTetrad.length; i++) {
  //     for (let j = 0; j < this.currentTetrad.length; j++) {
  //       let nextPosX = currPosX + j + nextX;
  //       let nextPosY = currPosY + j + nextY;
  //       debugger
  //       if (!this.currentTetrad[i][j]) {
  //         continue;
  //       }
  //        else if ((nextPosX >= cols) || (nextPosX < 0) || (nextPosY >= rows)) { //check walls
  //         return true;
  //       } else if (this.currentTetrad[nextPosX][nextPosY] !== "black") { //check adjacent cell to be empty and on board
  //         return true;
  //       } 
  //     }
  //   }

  //   return false;
  // }
  
}

// const currtetrad = new Tetrad({color:"purple", tetrad: tetradBlocks.zBlock});
// currtetrad.drawTetrad();

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   switch (event.keyCode) {
//     case 37:
//       currtetrad.removePrev();
//       currtetrad.moveLeft();
//       currtetrad.drawTetrad();
//     break;
//     case 39:
//       currtetrad.removePrev();
//       currtetrad.moveRight();
//       currtetrad.drawTetrad();
//     break;
//     case 38:
//       currtetrad.removePrev();
//       currtetrad.rotateTetrad();
//       currtetrad.drawTetrad();
//     break;
//     case 40:
//       currtetrad.removePrev();
//       currtetrad.moveDown();
//       currtetrad.drawTetrad();
//     // debugger
//       document.getElementById('t-body').click();
//     // $('#t-body').trigger("click");
//     break;
//   }
// });



//DELETE
// window.Tetrad = Tetrad;
// window.currtetrad = currtetrad;
//DELETE

module.exports = Tetrad;
