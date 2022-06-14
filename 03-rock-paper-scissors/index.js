function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let outcome = "";

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          outcome = "It's a tie!";
          break;
        case "paper":
          outcome = "You Lose! Paper beats Rock";
          break;
        case "scissors":
          outcome = "You Win! Rock beats Scissors";
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          outcome = "You Win! Paper beats Rock";
          break;
        case "paper":
          outcome = "It's a tie!";
          break;
        case "scissors":
          outcome = "You Lose! Scissors beats paper";
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          outcome = "You Lose! Rock beats Scissors";
          break;
        case "paper":
          outcome = "You Win! Scissors beats paper";
          break;
        case "scissors":
          outcome = "It's a tie!";
          break;
      }
      break;
    default:
      outcome = "Invalid user selection";
      break;
  }

  resultBoard.textContent = outcome;
  updateScore(outcome);
  updateBoard(outcome);

  return outcome;
}

function updateScore(outcome) {
  if (outcome[4] === "W") {
    playerScore++;
  } else if (outcome[4] === "L") {
    computerScore++;
  }
}

function updateBoard(outcome) {
  scoreBoard.textContent = `${playerScore} - ${computerScore}`;
  resultBoard.textContent = outcome;

  if (computerScore == 5 || playerScore == 5) {
    playerButtons.forEach((button) => (button.disabled = true));

    if (computerScore > playerScore) {
      resultBoard.textContent = `You lose! With a ${playerScore} - ${computerScore} score`;
    } else {
      resultBoard.textContent = `You win! With a ${playerScore} - ${computerScore} score`;
    }

    restartButton.style.visibility = "visible";
    restartButton.disabled = false;
  }
}

function newGame() {
  playerScore = 0;
  computerScore = 0;

  restartButton.style.visibility = "hidden";
  restartButton.disabled = true;

  playerButtons.forEach((button) => (button.disabled = false));

  scoreBoard.textContent = "0 - 0";
  resultBoard.textContent = "Choose an option to start the game";
}

let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll(".player-selection");
const scoreBoard = document.querySelector("#score");
const resultBoard = document.querySelector("#result");
const restartButton = document.querySelector("#restart");

playerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.textContent, computerPlay());
  });
});

restartButton.addEventListener("click", newGame);
restartButton.style.visibility = "hidden";
restartButton.disabled = true;
