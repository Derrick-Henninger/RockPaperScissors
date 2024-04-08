

let playerScore = 0;
let computerScore = 0;


const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random()* 3)]
}

let playerSelection = prompt("Type rock, paper or scissors!").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

       
function playRound(computerSelection, playerSelection) {

    
    if (computerSelection == playerSelection) {
        return 'tie';
    }

    else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        return 'Player wins! Rock beats scissors.';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        return 'Computer wins! Rock beats Scissors';
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock'){
        return 'Computer Wins! Paper beats rock.'
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'Computer Wins! Scissors beat paper.'
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        return 'Player Wins! Paper beats paper.'
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return 'Player Wins! Scissors beats paper.'
    }
    else {
        return 'That is not an option!'
    }

}
       
console.log(playRound(computerSelection, playerSelection));
alert(playRound(computerSelection, playerSelection));

function playGame (){
    getComputerChoice();
    let playerSelection = prompt("Type rock, paper or scissors!").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound();
    console.log(playRound(computerSelection, playerSelection));
    alert(playRound(computerSelection, playerSelection));
}     

playGame ();
playGame ();
playGame ();
playGame ();

