let computerSelection;
let humanSelection;
let computerScore;
let playerScore;

function getcomputerSelection() {
    const arr = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    
    return arr[random];
}

game();

function game() {
    computerScore = 0;
    playerScore = 0;
    
    for(let i = 0; i<5; i++) {
        gethumanSelection();
    }

    console.log(declareWinner())

    function declareWinner() {
        if (playerScore===computerScore) {
            alert(playerScore + '-' + computerScore + '\nTie game!');
            return playerScore + '-' + computerScore + '\nTie game!';
        } else if (playerScore>computerScore) {
            alert(playerScore + '-' + computerScore + '\nYou win!!');
            return playerScore + '-' + computerScore + '\nYou win!!';
        } else {
            alert(playerScore + '-' + computerScore + '\nYou lost. Better luck next time!');
            return playerScore + '-' + computerScore + '\nYou lost. Better luck next time!';
        }
    }
}

function gethumanSelection() {
    humanSelection = prompt("Please choose between: 1)🪨 2)📄 3)✂️");
    if ((humanSelection.toLowerCase() == "rock") || (humanSelection.toLowerCase() == "paper") || (humanSelection.toLowerCase() == "scissors")) {
        console.log("Game on!!!😤");
        console.log(computerSelection);
        console.log(playRound(humanSelection,computerSelection));
    } else {
        alert("invalid input.");
        gethumanSelection();
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getcomputerSelection().toLowerCase();
    playerSelection = humanSelection.toLowerCase();
    console.log(computerSelection);
    if (computerSelection==playerSelection) {
        alert('Tie game!');
        return 'Tie game\nComputer Score: ' + 
                computerScore + '\nYour Score: ' + playerScore;
    } else if ((computerSelection=='rock' && playerSelection=='scissors') 
            || (computerSelection=='scissors' && playerSelection=='paper') 
            || (computerSelection=='paper' && playerSelection=='rock')) {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 'Computer Score: ' + ++computerScore + 
                '\nYour Score: ' + playerScore;
    } else {
        alert('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 'Your Score: ' + ++playerScore + 
                '\nComputer Score: ' + computerScore;
    }
}