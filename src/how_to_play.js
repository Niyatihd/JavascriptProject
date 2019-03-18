let steps = [
              "OBJECTIVE– Use your physical and mental skills at clearing as many lines as possible.",
              "CLEAR LINES– Move the tetraminoes and drop them on each other like completing a puzzle to fill all the blocks in one line.",
              "NEXT TETRAD– It will show you the upcoming tetrad so you can plan your current and next move at the same time.",
              "SCORE POINTS– Score points by clearing as many lines as possible before game is over.",
              "GAME OVER– If the stack of tetrominoes touches the ceiling you 're toast!",
              "DIRECTION - Use the arrow keys to move and rotate the tetrominoes.",
              "UP Key - Rotates the tetrominoes.",
              "RIGTH Key - Moves the tetrominoes right.",
              "LEFT Key - Moves the tetrominoes left.",
              "DOWN Key - Moves the tetrominoes down.",
            ];

// for (let i = 0; i < steps.length; i++) {
//   let step = steps[i];
//   let ul = document.getElementById("friendsList");
//   let li = document.createElement('li');
//   li.appendChild(document.createTextNode(name));
//   ul.appendChild(li);
// }



function display() {
  let element = document.getElementById("gameDirections");
  let clicked = false;
  let count = 0;
  let instructions = document.createElement("div");
  instructions.innerHTML = "Game Directions";
  instructions.id = "gameDirections-text";
  let ul = document.createElement('ul');
  instructions.appendChild(ul);
  
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(step));
    ul.appendChild(li);
  }

  // instructionstText.innerHTML = "Game Directions";
  // instructions.id = "gameDirections-text";
  // debugger

   // 3. Add event handler
  element.addEventListener("click", function () {
    // debugger
    if (count > 0) {
      document.getElementById('gameDirections-text').classList.remove('hide');
    }

    if (!clicked) {
      let leftPanel = document.getElementsByClassName("left-panel")[0];
      leftPanel.appendChild(instructions);
      clicked = true;
      count += 1;
    } else {
      document.getElementById('gameDirections-text').classList.add('hide');
      clicked = false;
      count += 1;
    }
  });
  
}

module.exports = display;