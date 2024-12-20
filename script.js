// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Select the #score div and initialize its content
const scoreDiv = document.querySelector("#score");
scoreDiv.textContent = `Current Score          Player: ${humanScore}          Computer: ${computerScore}`;

// Create and initialize the result display div
const resultDiv = document.createElement("div");
resultDiv.textContent = "Result: ";
document.body.insertBefore(resultDiv, scoreDiv.nextSibling); // Place below scoreDiv

// Select buttons
const rockClick = document.querySelector("#rock");
const paperClick = document.querySelector("#paper");
const scissorsClick = document.querySelector("#scissors");

// Add event listeners for buttons
rockClick.addEventListener("click", function () {
  playRound("rock");
});

paperClick.addEventListener("click", function () {
  playRound("paper");
});

scissorsClick.addEventListener("click", function () {
  playRound("scissors");
});

// Generate computer choice
function getComputerChoice(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Play a single round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice(0, 2);

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "Result: Tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    resultDiv.textContent = "Result: You lose! Paper beats rock.";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    resultDiv.textContent = "Result: You lose! Scissors beat paper.";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    resultDiv.textContent = "Result: You lose! Rock beats scissors.";
    computerScore++;
  } else {
    resultDiv.textContent = `Result: You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    humanScore++;
  }

  // Update the score display
  scoreDiv.textContent = `Current Score          Player: ${humanScore}          Computer: ${computerScore}`;

  // Check for game over condition
  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

// Handle the end of the game
function endGame() {
  if (humanScore === 5) {
    resultDiv.textContent = "Game Over: You win the series!";
  } else {
    resultDiv.textContent = "Game Over: You lose the series!";
  }

  // Disable the buttons
  rockClick.disabled = true;
  paperClick.disabled = true;
  scissorsClick.disabled = true;

  // Optionally add a reset button
  const resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  resetButton.addEventListener("click", resetGame);
  document.body.appendChild(resetButton);
}

// Reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  scoreDiv.textContent = `Current Score          Player: ${humanScore}          Computer: ${computerScore}`;
  resultDiv.textContent = "Result: ";

  rockClick.disabled = false;
  paperClick.disabled = false;
  scissorsClick.disabled = false;

  // Remove the reset button
  document.querySelector("button:last-child").remove();
}
