function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie";
    }else{
        switch (playerSelection) {
            case "rock":
                if(computerSelection === "scissors") {
                    console.log("You Win! Rock beats Scissors");
                }else {
                    console.log("You Lose! Paper beats Rock");
                }
                break;

            case "paper":
                if(computerSelection === "rock") {
                    console.log("You Win! Paper beats Rock");
                }else {
                    console.log("You Lose! Scissors beats Paper");
                }
                break;

            case "scissors":
                if(computerSelection === "paper") {
                    console.log("You Win! Scissors beats Paper");
                }else {
                    console.log("You Lose! Rock beats Scissors");
                }
                break;
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));