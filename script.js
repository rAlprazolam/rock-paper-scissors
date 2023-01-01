let playerWins = 0;
let computerWins = 0;

const Choice = {
    ROCK: "Rock",
    PAPER: "Paper",
    SCISSORS: "Scissors"
};

const Gamestate = {
    WON: "You have won!",
    LOST: "You have lost!",
    DRAW: "It`s a tie!"
};

const playerScore = document.querySelector("#player_score");
const computerScore = document.querySelector("#computer_score");

computerScore.textContent = computerWins;
playerScore.textContent = playerWins;

/**
 * @returns Returns a random pick from Rock, Paper, Scissors
 */
function getComputerChoice() {
    const CHOICES = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

/**
 * Plays around of rock, paper, scissors with the players choice and a computer choice
 * @param {Choice*} playerChoice 
 * @param {Choice*} computerChoice 
 * @returns 
 */
function playRound(playerChoice, computerChoice) {
    console.log(`The computer picked: ${computerChoice}.`);
    if(playerChoice == computerChoice) return Gamestate.DRAW;
    else if (playerChoice == Choice.ROCK) {
        if(computerChoice == Choice.PAPER) return Gamestate.LOST;
        else return Gamestate.WON;
    }
    else if (playerChoice == Choice.PAPER) {
        if(computerChoice == Choice.ROCK) return Gamestate.WON;
        else return Gamestate.LOST;
    }
    else {
        if(computerChoice == Choice.ROCK) return Gamestate.LOST;
        else return Gamestate.WON;
    }
}

/**
 * Plays a game of rock paper scissor and console.logs the outcome.
 * If the player wins playerWins is increased by 1.
 * If the computer wins computerWins is increased by 1.
 * If it`s a draw no one gets points.
 * @returns null
 */
function game(playerChoice) {
    let computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);
    if(result == Gamestate.DRAW) return;
    else if (result == Gamestate.WON) {
        playerWins += 1;
        playerScore.textContent = playerWins;
    }
    else {
        computerWins += 1;
        computerScore.textContent = computerWins;
    }
}

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissors");

rockButton.addEventListener("click", () => game(Choice.ROCK));
paperButton.addEventListener("click", () => game(Choice.PAPER));
scissorButton.addEventListener("click", () => game(Choice.SCISSORS));
