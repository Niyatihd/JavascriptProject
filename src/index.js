const _ = require("lodash");
const Game = require('./game');
// const board = require('./board');
// const tetrad = require('./tetrad');
// const tetradBlocks = require("./tetrad_blocks");


document.addEventListener("DOMContentLoaded", () => {
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  // const ctx = canvasEl.getContext("2d");
  const newGame = new Game();
  newGame.render();
  document.addEventListener("keydown", newGame.tetradMoves);
  window.newGame = newGame;

});


// const newBoard = new board();
// const currtetrad = new tetrad({
//   color: "black",
//   tetrad: tetradBlocks.uBlock
// });

// newBoard.drawBoard();
// currtetrad.drawTetrad();

// //DELETE
// window.newBoard = newBoard;
// window.currtetrad = currtetrad;
// window.newGame = newGame;
// //DELETE
