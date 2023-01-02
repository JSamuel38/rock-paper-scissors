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

function playRound(playerSelection, computerSelection) {
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
        
        default:
            return "Please enter rock, paper, or scissors";
    }
    return "It's a tie!";
}

function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice: ");
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result == "You win!") {
            playerScore++;
        } 
        if (result == "You lose!") {
            computerScore++;
        }
        if (result == "Please enter rock, paper, or scissors") {
            i--;
        }
    }

    console.log(`Player's score: ${playerScore}\nComputer's score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}