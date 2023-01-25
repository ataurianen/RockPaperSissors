function computerSelection () {
   // Needs to return a random choice of Rock, Paper, or Sissors 
    const max = 3;
    const min = 1;
    let choice = Math.floor(Math.random() * (max - min + 1) + min);

    if (choice == 1) {
        return "rock";
    }

    if (choice == 2) {
        return "paper";
    }

    if (choice == 3) {
        return "sissors";
    }
}

function playerSelection () {
    // Needs to ask player for thier choice and return it
    while (true) {
        let input = prompt("Rock, Paper, or Sissors?");
        selection = input.toLowerCase();
        
        if (selection == 'rock' || selection == 'paper' || selection == 'sissors') {
            return selection;
        }
        else {
            alert("Not a valid selection");
        }
    }
       
}

function playRound(playerSelection, computerSelection) {
    // Should play one round of the Rock, Paper, Sissors

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerWins++;
            return 'You Loose! Paper beats Rock';
        }
        else if (computerSelection == 'sissors') {
            playerWins++;
            return 'You win! Rock beats Sissors';
        }
        else {
            return 'Tie game!';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerWins++;
            return 'You win! Paper beats Rock';
        }
        else if (computerSelection == 'sissors') {
            computerWins++;
            return 'You loose! Sissors beats Rock';
        }
        else {
            return 'Tie game!';
        }
    }
    else {
        if (computerSelection == 'rock') {
            computerWins++;
            return 'You loose! Rock beats Sissors';
        }
        else if (computerSelection == 'paper') {
            playerWins++;
            return 'You win! Sissors beats Paper';
        }
        else {
            return 'Tie game!';
        }
    }
}

function reset() {
    playerWins = 0;
    computerWins = 0;
}

function displayWinner(nameOfWinner) {
    results.textContent += "\n" + nameOfWinner + " has won the game!";
    reset();
}

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const sissorsBtn = document.querySelector('#sissors-btn');
const results = document.querySelector('#results')

results.setAttribute('style', 'white-space:pre');

winnerDiv = document.createElement('div');
computerWins = 0;
playerWins = 0;

rockBtn.addEventListener('click', function(e) {
results.textContent = playRound('rock',computerSelection());
results.textContent += "\nPlayer Wins: " + playerWins + " Computer Wins: " + computerWins;
if (playerWins == 5) {
    displayWinner("Player");
}
else if (computerWins == 5) {
    displayWinner("Computer");
}
});

paperBtn.addEventListener('click', function(e) {
results.textContent = playRound('paper',computerSelection());
results.textContent += "\nPlayer Wins: " + playerWins + " Computer Wins: " + computerWins;
if (playerWins == 5) {
    displayWinner("Player");
}
else if (computerWins == 5) {
    displayWinner("Computer");
}
});

sissorsBtn.addEventListener('click', function(e) {
results.textContent = playRound('sissors',computerSelection());
results.textContent += "\nPlayer Wins: " + playerWins + " Computer Wins: " + computerWins;
if (playerWins == 5) {
    displayWinner("Player");
}
else if (computerWins == 5) {
    displayWinner("Computer");
}
});
