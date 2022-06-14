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
          outcome = "It's a tie";
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
  console.log(outcome);
  return outcome;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    let outcome = playRound(playerSelection, computerPlay());
    console.log(outcome);

    if (outcome[4] === "W") {
      playerScore++;
    } else if (outcome[4] === "L") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win! With a ${playerScore} - ${computerScore} score`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! With a ${playerScore} - ${computerScore} score`);
  } else {
    console.log(`It's a tie! With a ${playerScore} - ${computerScore} score`);
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = [rock, paper, scissors];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, computerPlay());
  });
});
