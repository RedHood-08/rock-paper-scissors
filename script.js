let score = [0, 0];

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

            score[0]++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else {
            score[1]++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}


function game() {
    const playerSelection = this.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    scoreboard.querySelector('#result').textContent = playRound(playerSelection, computerSelection);
    scoreboard.querySelector('#score').textContent = "You: "+ score[0] + "   NPC: " + score[1];

    if(score[0] === 5) {
        scoreboard.querySelector('#winner').textContent = "You are the winner!!!";
        choices.forEach(choice => choice.removeEventListener('click', game));
    } else if(score[1] === 5) {
        scoreboard.querySelector('#winner').textContent = "NPC is the winner!!!";
        choices.forEach(choice => choice.removeEventListener('click', game));
    }
        
}


const choices = document.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard');
scoreboard.querySelector('#result').textContent = "";
scoreboard.querySelector('#score').textContent = "You: "+ score[0] + "   NPC: " + score[1];

choices.forEach(choice => choice.addEventListener('click', game));