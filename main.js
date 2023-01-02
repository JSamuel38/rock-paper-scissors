function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "You win!";
            } else if (computerSelection === "paper") {
                return "You lose!";
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                return "You win!";
            } else if (computerSelection === "scissors") {
                return "You lose!";
            }
            break;
        
        case "scissors":
            if (computerSelection === "paper") {
                return "You win!";
            } else if (computerSelection === "rock") {
                return "You lose!";
            }
            break;
    }
    return "It's a tie!";
}