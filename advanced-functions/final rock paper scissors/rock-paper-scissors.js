const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();
function playgame(playerMove) {
  computerMove = pickComputerMove();
  result = "";
  if (playerMove == "scissors") {
    if (computerMove == "scissors") result = "Tie";
    else if (computerMove == "rock") result = "You Lose";
    else result = "You Win";
  } else if (playerMove == "paper") {
    if (computerMove == "paper") result = "Tie";
    else if (computerMove == "rock") result = "You Win";
    else result = "You Lose";
  } else {
    if (computerMove == "rock") result = "Tie";
    else if (computerMove == "paper") result = "You Lose";
    else result = "You Win";
  }
  if (result === "You Win") score.wins++;
  else if (result === "You Lose") score.losses++;
  else score.ties++;
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  document.querySelector(
    ".move"
  ).innerHTML = `You Picked <img class="move-icon" src="images/${playerMove}-emoji.png"/> Computer Picked <img class="move-icon" src="images/${computerMove}-emoji.png"/>.`;
  document.querySelector(".js-result").innerHTML = result;
}
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
function pickComputerMove() {
  let random = Math.random();
  let computerMove = "";
  if (random >= 0 && random <= 1 / 3) computerMove = "rock";
  else if (random > 1 / 3 && random <= 2 / 3) computerMove = "paper";
  else computerMove = "scissors";
  return computerMove;
}
let isautoplay = false;
let intervalId;
function Autoplay() {
  if (!isautoplay) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playgame(playerMove);
    }, 1000);
    isautoplay = true;
  } else {
    clearInterval(intervalId);
    isautoplay = false;
  }
}
