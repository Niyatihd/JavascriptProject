const _ = require("lodash");
const board = require('./board');
const tetrad = require('./tetrad');

class component {
  // let element = document.createElement('div');
  
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  // return element;
}
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
const newBoard = new board();
const currtetrad = new tetrad({color:"purple"});

newBoard.drawBoard(c);
currtetrad.drawTetrad(c);
// currtetrad.moveTetrad();


//DELETE
window.newBoard = newBoard;
window.currtetrad = currtetrad;
//DELETE

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
// document.addEventListener("keypress", (event) => {
//   console.log(event);
//   event.preventDefault();
//   switch (event.keyCode) {
//     case 37:
//       alert("left");
//       break;
//     case 39:
//       alert("right");
//       break;
//     case 38:
//       alert("up");
//       break;
//     case 40:
//       alert("down");
//       break;
//   }
// });