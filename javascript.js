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
            return 'You Loose! Paper beats Rock';
        }
        else if (computerSelection == 'sissors') {
            return 'You win! Rock beats Sissors';
        }
        else {
            return 'Tie game!';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock';
        }
        else if (computerSelection == 'sissors') {
            return 'You loose! Sissors beats Rock';
        }
        else {
            return 'Tie game!';
        }
    }
    else {
        if (computerSelection == 'rock') {
            return 'You loose! Rock beats Sissors';
        }
        else if (computerSelection == 'paper') {
            return 'You win! Sissors beats Paper';
        }
        else {
            return 'Tie game!'
        }
    }
  }

 