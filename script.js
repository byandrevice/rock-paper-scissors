function getComputerChoice(min, max) {
    let randomNumber = Math.floor(Math.random() * (max-min)) + min;
    
    if (randomNumber === 0) {
        randomNumber = "rock";
    } else if (randomNumber === 1) {
        randomNumber = "paper";
    } else {
        randomNumber = "scissors";
    }
    return randomNumber;
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choice != "rock" && choice!= "paper" 
        && choice!= "scissors") {
        alert("Invalid command");
    } else {
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.")
        computerScore ++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore ++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore ++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
        humanScore ++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore ++;
    } else {
        console.log("You win! Scissors beats paper.");
        humanScore ++;
    }
}

function playGame() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice(0,2);
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the series!");
    } else  if (humanScore === computerScore) {
        console.log("Series Tie!");
    } else {
        console.log("You lose the series");
    }


}


playGame();




