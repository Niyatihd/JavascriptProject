const _ = require("lodash");
const Game = require('./game');
// const board = require('./board');
// const tetrad = require('./tetrad');
// const tetradBlocks = require("./tetrad_blocks");


document.addEventListener("DOMContentLoaded", () => {
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  // const ctx = canvasEl.getContext("2d");
  var button = document.createElement("button");
  button.innerHTML = "Start Game";
  button.id = "startGame";
  

  // 2. Append somewhere
  var body = document.getElementsByClassName("tetris-canvas")[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener("click", function () {
      // alert("did something");
    document.getElementById('startGame').classList.add('hide');

    // var showNext = document.createElement("div");
    // showNext.innerHTML = "Next Tetrad";
    // showNext.id = "next-tetrad";
    // var nextTetradDiv = document.getElementsByClassName("right-panel")[0];
    // body.appendChild(nextTetradDiv);

    // element.addEventListener("click", function () {
    //   alert("Hello World!");
    
    const newGame = new Game();
    // let button = document.getElementById("gameStart");
    // button.onclick();
    newGame.render();
    document.addEventListener("keydown", newGame.tetradMoves);

    let start = Date.now();
    let gameOver = false;

    function animate() {
      let now = Date.now();
      let timeDelta = now - start;
      if (timeDelta > 750) {
        newGame.moveDown();
        start = Date.now();
      }
      if (!gameOver) {
        requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(requestAnimationFrame(animate));
      }

    }

  
    window.requestAnimationFrame(animate);
  //DELETE
  window.newGame = newGame;
  //DELETE
  });
//  });

 });


