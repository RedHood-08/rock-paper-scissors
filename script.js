function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie";
    }else{
        if( playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "paper" ) {
            
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}


function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt().toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Round " + (i+1) + ": " + playRound(playerSelection, computerSelection));
    }
    console.log("You score is "+ score);
}