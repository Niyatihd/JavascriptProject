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
// const currtetrad = new tetrad({color:"purple", tetrad: zBlock});

newBoard.drawBoard(c);
currtetrad.drawTetrad(c);

//DELETE
window.newBoard = newBoard;
window.currtetrad = currtetrad;
//DELETE