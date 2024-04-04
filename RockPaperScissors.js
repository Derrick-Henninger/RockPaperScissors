
let getComputerChoice = (Math.ceil(Math.random()* 3));

switch(getComputerChoice) {

    case 1:
    computerSelection = 'Rock';

    case 2: 
    computerSelection = 'Paper';

    case 3:
    computerSelection = 'Scissors';
}

console.log(computerSelection);

let playerSelection = prompt("What do you choose? Rock, paper, or scissors?");

function playRound(playerSelection, computerSelection) {

    if (computerSelection.toUpperCase === 'rock' && playerSelection === 'scissors' ||
    computerSelection.toUpperCase === 'paper' && playerSelection === 'rock' ||
    computerSelection.toUpperCase === 'scissors' && playerSelection === 'paper')
    alert('You lose!');

    else (computerSelection.toUpperCase === 'paper' && playerSelection === 'scissors' ||
    computerSelection.toUpperCase === 'scissors' && playerSelection === 'rock' ||
    computerSelection.toUpperCase === 'rock' && playerSelection === 'paper')
    alert('You win!');

}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
