let computerSelection;
let humanSelection='';
let computerScore;
let playerScore;


function getcomputerSelection() {
    console.log(1);
    const arr = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    
    return arr[random];
}

function gethumanSelection() {
    console.log(2);
    const choices = document.querySelectorAll('.choices');
    choices.forEach(choice => choice.addEventListener('click', function(e){
        humanSelection = this.getAttribute('data-value');
        console.log('human selection = ', humanSelection);
        console.log(playRound(humanSelection, computerSelection));
        return;
    }))
}

game();

function game() {
    console.log("game");
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



function playRound(playerSelection, computerSelection) {
    console.log("playRound");
    computerSelection = getcomputerSelection().toLowerCase();
    playerSelection = humanSelection.toLowerCase();
    console.log('computer selection = ',computerSelection);
    
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