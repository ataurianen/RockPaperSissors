function computerSelection () {
   // Needs to return a random choice of Rock, Paper, or Sissors 
    const max = 3
    const min = 1
    let choice = Math.floor(Math.random() * (max - min + 1) + min)

    if (choice == 1) {
        return "Rock"
    }

    if (choice == 2) {
        return "Paper"
    }

    if (choice == 3) {
        return "Sissors"
    }
}

function playerSelection () {
    // Needs to ask player for thier choice and return it
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }