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

/*The result of the game*/
const gameOutcome = document.querySelector("#game_outcome");

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
    let result = playRound(playerChoice, computerChoice);
    if (result == Gamestate.WON) {
        playerWins += 1;
    }
    else if (result == Gamestate.LOST) {
        computerWins += 1;
    }
    updateGameScore(result);
}
/**
 * Updates the DOM according to the given Result.
 * @param {Gamestate*} result 
 */
function updateGameScore(result) {
    const playerScore = document.querySelector("#player_score");
    const computerScore = document.querySelector("#computer_score");

    gameOutcome.textContent = result;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

function updatePickedChoicesUI(playerChoice, computerChoice) {
    const playerChoiceParentUI = document.querySelector("#playerChoice");
    const computerChoiceParentUI = document.querySelector("#computerChoice");

    Array.from(playerChoiceParentUI.childNodes).forEach((child) => playerChoiceParentUI.removeChild(child));
    Array.from(computerChoiceParentUI.childNodes).forEach((child) => computerChoiceParentUI.removeChild(child));
}

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissors");

rockButton.addEventListener("click", () => game(Choice.ROCK));
paperButton.addEventListener("click", () => game(Choice.PAPER));
scissorButton.addEventListener("click", () => game(Choice.SCISSORS));
