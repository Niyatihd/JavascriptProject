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

// let radius = 800;
// let svg = d3.select("body")
//   .append("svg")
//   .attr("id", "#dog");

// svg.on("click", function () { 
//   for (let i = 1; i < 5; ++i) {
//     let position = d3.mouse(svg.node());

//     let circle = svg.append("circle")
//       .attr("cx", position[0])
//       .attr("cy", position[1])
//       .attr("r", 0)
//       .style("stroke-width", 5 / (i))
//       .transition()
//       .delay(Math.pow(i, 2.5) * 50)
//       .duration(2000)
//       .ease('quad-in')
//       .attr("r", radius)
//       .style("stroke-opacity", 0)
//       .each("end", function () {
//         d3.select(this).remove();
//       });
//   }
// });