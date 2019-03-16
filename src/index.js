const _ = require("lodash");
const board = require('./board');
const tetrad = require('./tetrad');
const tetradBlocks = require("./tetrad_blocks");


const newBoard = new board();
const currtetrad = new tetrad({
  color: "black",
  tetrad: tetradBlocks.iBlock
});

// const currtetrad = new tetrad({color:"purple"});

newBoard.drawBoard();
currtetrad.drawTetrad();

//DELETE
window.newBoard = newBoard;
window.currtetrad = currtetrad;
//DELETE

