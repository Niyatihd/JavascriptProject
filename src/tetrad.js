const _ = require("lodash");
const Util = require("./util");


class Tetrad {
  constructor(options={}) {
    this.color = options.color || "yellow";
    this.xOffset = 4;
    this.yOffset = 2;
    this.tetrad = this.getRandomTetrad();//REVISE
    this.currentTetrad = this.tetrad[1];
  }

  getRandomTetrad() {
    let tetrads = [zBlock, jBlock, lBlock, sBlock, tBlock, iBlock, uBlock];
    let randomtetrad = tetrads[Math.floor(Math.random() * tetrads.length)];
    return randomtetrad;
  }

  drawTetrad(c) {
    for (var i = 0; i < this.currentTetrad.length; i++) {
      for (var j = 0; j < this.currentTetrad.length; j++) {
        if (this.currentTetrad[i][j]) {
          Util.drawUnitSquare(this.xOffset + j, this.yOffset + i, this.color, c);
        }
      }
    }
  }
  
}
// document.addEventListener("keydown", CONTROL);

// function CONTROL(event) {
//   if (event.keyCode == 37) {
//     alert("left");
//   } else if (event.keyCode == 38) {
//     alert("left");
//   } else if (event.keyCode == 39) {
//     alert("left");
//   } else if (event.keyCode == 40) {
//     alert("left");
//   }
// }


document.addEventListener("keydown", (event) => {
  console.log(event);
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      alert("left");
      break;
    case 39:
      alert("right");
      break;
    case 38:
      alert("up");
      break;
    case 40:
      alert("down");
      break;
  }
});

const zBlock = [
  [ [0, 1, 0], 
    [1, 1, 0], 
    [1, 0, 0] ],
  [ [0, 0, 0], 
    [1, 1, 0], 
    [0, 1, 1] ], 
  [ [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0] ],
  [ [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1] ]
];
const jBlock = [
  [ [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0] ],
  [ [0, 0, 0],
    [1, 1, 1], 
    [0, 0, 1] ], 
  [ [0, 0, 1],
    [0, 0, 1],
    [0, 1, 1] ],
  [ [0, 0, 0],
    [1, 0, 0],
    [1, 1, 1] ]
];
const lBlock = [
  [ [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0] ],
  [ [0, 0, 0],
    [1, 1, 1], 
    [1, 0, 0] ], 
  [ [0, 1, 1],
    [0, 0, 1],
    [0, 0, 1] ],
  [ [0, 0, 0],
    [0, 0, 1],
    [1, 1, 1] ]
];
const sBlock = [
  [ [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1] ],
  [ [0, 0, 0],
    [0, 1, 1], 
    [1, 1, 0] ], 
  [ [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0] ],
  [ [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0] ]
];
const tBlock = [
  [ [1, 0, 0],
    [1, 1, 0],
    [1, 0, 0] ],
  [ [0, 0, 0], 
    [1, 1, 1], 
    [0, 1, 0] ], 
  [ [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1] ],
  [ [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1] ]
];
const iBlock = [
  [ [0, 1, 0, 0], 
    [0, 1, 0, 0], 
    [0, 1, 0, 0],
    [0, 1, 0, 0] ],
  [ [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0],
    [1, 1, 1, 1] ],
  [ [0, 0, 1, 0], 
    [0, 0, 1, 0], 
    [0, 0, 1, 0],
    [0, 0, 1, 0] ],
  [ [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0],
    [1, 1, 1, 1] ]
];
const uBlock = [
  [ [0, 1, 1, 0], 
    [0, 0, 1, 0], 
    [0, 0, 1, 0],
    [0, 1, 1, 0] ],
  [ [0, 0, 0, 0], 
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1] ],
  [ [0, 1, 1, 0], 
    [0, 1, 0, 0], 
    [0, 1, 0, 0],
    [0, 1, 1, 0] ],
  [ [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [1, 1, 1, 1],
    [1, 0, 0, 1] ]
];

module.exports = Tetrad;

const currtetrad = new Tetrad({color:"purple", tetrad: uBlock});
// currtetrad.moveTetrad();


//DELETE
window.currtetrad = currtetrad;
//DELETE


// Tetrad.unit = 25;

                  // zBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*2), Tetrad.unit);
                  //   c.fillRect(startPosX + Tetrad.unit, startPosY+Tetrad.unit, (Tetrad.unit*2), Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX + Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX + Tetrad.unit, startPosY + Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX + (Tetrad.unit*2), startPosY + Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // jBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*3), Tetrad.unit);
                  //   c.fillRect(startPosX+(Tetrad.unit*2), startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // lBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*3), Tetrad.unit);
                  //   c.fillRect(startPosX, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   // // c.save();
                  // }
                  
                  // oBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*2), (Tetrad.unit*2));
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // sBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY+Tetrad.unit, (Tetrad.unit*2), Tetrad.unit);
                  //   c.fillRect(startPosX+Tetrad.unit, startPosY, (Tetrad.unit*2), Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // tBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*3), Tetrad.unit);
                  //   c.fillRect(startPosX+Tetrad.unit, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // iBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, (Tetrad.unit*4), Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*3), startPosY, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }
                  
                  // uBlock(startPosX, startPosY, c, color) {
                  //   c.fillStyle = color;
                  //   c.strokeStyle = "slategrey";
                  //   c.fillRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.fillRect(startPosX, startPosY + Tetrad.unit, (Tetrad.unit*3), Tetrad.unit);
                  //   c.fillRect(startPosX + (Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.clearRect(startPosX + (Tetrad.unit*2)+5, startPosY+5, 15, 15);
                  //   c.strokeRect(startPosX, startPosY, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+Tetrad.unit, startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY+Tetrad.unit, Tetrad.unit, Tetrad.unit);
                  //   c.strokeRect(startPosX+(Tetrad.unit*2), startPosY, Tetrad.unit, Tetrad.unit);
                  //   // c.save();
                  // }