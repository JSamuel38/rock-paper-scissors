function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);  //Random number between 0 and 2
    if (rand === 0) {                          //which determines choice
        return "rock";
    } else if (rand === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//Checks who wins the round, depending on inputs
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

const buttonContainer = document.querySelector(".container");
const buttons = buttonContainer.querySelectorAll("button");

const scoreContainer = document.querySelector(".scoreContainer");
//Player's score
const playerScore = document.querySelector(".playerScore");
let playerTotal = 0;
playerScore.innerText = playerTotal;
//Computer's score
const computerScore = document.querySelector(".computerScore");
let computerTotal = 0;
computerScore.innerText = computerTotal;

const scoreText = document.querySelector(".scoreText");
//Changes score each time button is clicked
//Once score is 5, winner is announced
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.innerText;
        let result = playRound(playerChoice, getComputerChoice());
        scoreText.innerText = result;
        if (result == "You win!") {                     //Check who wins round
            playerScore.innerText = ++playerTotal;      //Increment score
        }
        if (result == "You lose!") {
            computerScore.innerText = ++computerTotal;
        }
        //Check who wins
        if (playerTotal >= 5) {
            scoreText.innerText = "You Won!"
            playerTotal = 0;
            computerTotal = 0;
            buttons.forEach((e) => { e.disabled = true });
            setTimeout(() => {          //Disable button and reset scores
                playerScore.innerText = playerTotal;
                computerScore.innerText = computerTotal;
                buttons.forEach((e) => { e.disabled = false });
            }, 1000);
        }
        if (computerTotal >= 5) {
            scoreText.innerText = "You lost!\nComputer Won!"
            playerTotal = 0;
            computerTotal = 0;
            buttons.forEach((e) => { e.disabled = true });
            setTimeout(() => {          //Disable every button and reset scores
                playerScore.innerText = playerTotal;
                computerScore.innerText = computerTotal;
                buttons.forEach((e) => { e.disabled = false });
            }, 1000);
        }
    });
});