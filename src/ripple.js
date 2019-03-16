// let r = 400;

// let svg = d3.select("body")
//   .append("svg");

// let positionLabel = svg.append("text")
//   .attr("x", 10)
//   .attr("y", 30);

// svg.on("click", function () { //<-D
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
//       .attr("r", r)
//       .style("stroke-opacity", 0)
//       .each("end", function () {
//         d3.select(this).remove();
//       });
//   }
// });