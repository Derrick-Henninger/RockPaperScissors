

let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"]

const gameDescription = document.createElement("span")
const body = document.querySelector("body");
const btnOptions = document.createElement("ul");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

gameDescription.textContent = "Play against the computer a game of rock, paper, scissors and see who wins, best out of 5!"
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
body.appendChild(gameDescription);
body.appendChild(btnOptions);
btnOptions.appendChild(rockBtn);
btnOptions.appendChild(paperBtn);
btnOptions.appendChild(scissorsBtn);


rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function playGame (playerSelection){
    function getComputerChoice() {
        return choices[Math.floor(Math.random()* 3)]
    }
 

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

  

    console.log(playerSelection);
    console.log(computerSelection);



function playRound(playerSelection) {

    if (computerSelection == playerSelection) {
        return 'Tie';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        playerScore += 1;
        return 'Player wins! Rock beats scissors.';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        computerScore += 1;
        return 'Computer wins! Rock beats Scissors';
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock'){
        computerScore += 1;
        return 'Computer Wins! Paper beats rock.'
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        computerScore += 1;
        return 'Computer Wins! Scissors beat paper.'
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        playerScore += 1;
        return 'Player Wins! Paper beats paper.'
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        playerScore += 1;
        return 'Player Wins! Scissors beats paper.'
    }
    else {
        return 'That is not an option!'
    }
}
}




function gameWinner() {
    if (playerScore == computerScore){
        return 'Tie game!'
    }
    else if (playerScore > computerScore){
        return 'Player wins! Best out of 5.' 
    }
    else (playerScore < computerScore)
        return 'Computer wins! Best out of 5.' 
}




console.log(playerScore, computerScore);


