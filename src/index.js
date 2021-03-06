const _ = require("lodash");
const Game = require('./game');
const display = require('./how_to_play');

document.addEventListener("DOMContentLoaded", () => {
  display();
  let button = document.createElement("button");
  button.innerHTML = "Start Game";
  button.id = "startGame";

  let body = document.getElementsByClassName("tetris-canvas")[0];
  body.appendChild(button);

  let pauseButton = document.createElement("button");
  pauseButton.setAttribute("id", "pause-game");
  pauseButton.innerHTML += "Pause";
  document.getElementsByClassName("trial-pause")[0].appendChild(pauseButton);
  pauseButton.addEventListener("click", function () {
    newGame.togglePause();
    if (newGame.pause === false) {
      document.getElementsByClassName("tetris-canvas-board")[0].classList.remove("hide");
    } else {
      newGame.gamePausedDisplay();
    }
  });

  button.addEventListener("click", function () {
    document.getElementById('startGame').classList.add('animated', 'zoomOutDown');

    const newGame = new Game();
    //DELETE
    window.newGame = newGame;
    //DELETE
    newGame.render();
    document.addEventListener("keydown", newGame.tetradMoves);


    let start = Date.now();

    function animate() {
      let now = Date.now();
      let timeDelta = now - start;
      if (!newGame.pause) {
        if (newGame.score <= 50) {
          if (timeDelta > 600) {
            newGame.moveDown();
            start = Date.now();
          }
        } else if (newGame.score <= 100) {
          if (timeDelta > 400) {
            newGame.moveDown();
            start = Date.now();
          }
        } else if (newGame.score <= 200) {
          if (timeDelta > 200) {
            newGame.moveDown();
            start = Date.now();
          }
        } else {
          if (timeDelta > 120) {
            newGame.moveDown();
            start = Date.now();
          }
        }
      } else {
        for (let i = 0; i < 1; i++) {
          newGame.moveUp();
          newGame.moveDown();
          start = Date.now();
        }
      }

      if (!newGame.gameOver) {
        if (newGame.pause) {
          document.getElementsByClassName("tetris-canvas-board")[0].classList.add("hide");
          pauseButton.innerHTML = "Resume";
        } else {
          if (document.getElementsByClassName("game-paused")[0]) {
            document.getElementsByClassName("game-paused")[0].outerHTML = "";
          }
          pauseButton.innerHTML = "Pause";
        }
        requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(requestAnimationFrame(animate));
        let tetrisCanvas = document.getElementsByClassName("tetris-canvas-board")[0];
        tetrisCanvas.classList.add("hide");
        newGame.gameOverDisplay();
        document.getElementById("pause-game").disabled = true;
      }
    }

    window.requestAnimationFrame(animate);
  });
});