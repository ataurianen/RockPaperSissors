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
            console.log('You Loose! Paper beats Rock');
            return 'Computer Wins!';
        }
        else if (computerSelection == 'sissors') {
            console.log('You win! Rock beats Sissors');
            return 'Player Wins!';
        }
        else {
            console.log('Tie game!');
            return 'Tie game!';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You win! Paper beats Rock');
            return 'Player Wins!';
        }
        else if (computerSelection == 'sissors') {
            console.log('You loose! Sissors beats Rock');
            return 'Computer Wins!';
        }
        else {
            console.log('Tie game!');
            return 'Tie game!';
        }
    }
    else {
        if (computerSelection == 'rock') {
            console.log('You loose! Rock beats Sissors');
            return 'Computer Wins!';
        }
        else if (computerSelection == 'paper') {
            console.log('You win! Sissors beats Paper');
            return 'Player Wins!';
        }
        else {
            console.log('Tie game!');
            return 'Tie game!';
        }
    }
  }

 function game() {
    let playerWins = 0
    let computerWins = 0
    let tieGames = 0

    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection(), computerSelection());

        if (result == 'Player Wins!') {
            playerWins++;
        }
        else if (result == 'Computer Wins!') {
            computerWins++;
        }
        else {
            tieGames++;
        }
    }
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + computerWins);
    console.log("Tie Games: " + tieGames);

    if (playerWins > computerWins) {
        console.log("Player wins the match");
    }
    else if (computerWins > playerWins) {
        console.log("COmputer wins the match");
    }
    else {
        console.log("Match is tied");
    }
 }

 game()