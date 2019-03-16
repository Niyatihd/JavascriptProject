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
    // this.currentTetrad = this.tetrad[1];
    this.currentTetrad = this.tetrad[0];
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
          Util.drawUnitSquare2(this.xOffset + j, this.yOffset + i, this.color);
        }
      }
    }
  }
  
  removePrev() {
    for (var i = 0; i < this.currentTetrad.length; i++) {
      for (var j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquare(this.xOffset + j, this.yOffset + i, "black");
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

  moveDown() {
    this.yOffset += 1;
  }
  
}

// const currtetrad = new Tetrad({color:"purple", tetrad: tetradBlocks.zBlock});
// currtetrad.drawTetrad();

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      currtetrad.removePrev();
      currtetrad.moveLeft();
      currtetrad.drawTetrad();
    break;
    case 39:
      currtetrad.removePrev();
      currtetrad.moveRight();
      currtetrad.drawTetrad();
    break;
    case 38:
      alert("up");
    break;
    case 40:
    currtetrad.removePrev();
    currtetrad.moveDown();
    currtetrad.drawTetrad();
    // debugger
    // document.getElementById('dog').click();
    $('#t-body').trigger("click");
    break;
  }
});



//DELETE
// window.Tetrad = Tetrad;
// window.currtetrad = currtetrad;
//DELETE

module.exports = Tetrad;
