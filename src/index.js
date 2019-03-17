const _ = require("lodash");
const Game = require('./game');
// const board = require('./board');
// const tetrad = require('./tetrad');
// const tetradBlocks = require("./tetrad_blocks");


const newGame = new Game();
newGame.render();
document.addEventListener("keydown", newGame.tetradMoves);

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
window.newGame = newGame;
// //DELETE
