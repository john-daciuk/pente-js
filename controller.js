const gridSize = 8;
const streakNeeded = 4;
const Model = new model(gridSize, streakNeeded);
const View = new view(Model);

View.drawBoard();
document.getElementById("status").innerHTML =  streakNeeded + " in a row to win";

function clicked(row, col) {
  document.getElementById("status").innerHTML =  "";
  if (Model.winner == null) {
    Model.makeMove(row, col);
    if (Model.winner != null) {
      gameOver();
    }
  } else {
    restartGame();
  }
  View.refresh();
}

function restartGame() {
  Model.clean();
  document.getElementById("status").innerHTML = "";
}

function gameOver() {
  document.getElementById("status").innerHTML = "Player " + Model.winner + " wins, click to restart.";
  var chime = new Audio("winChime.mp3");
  chime.play();
}
