/*Over all wins*/
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
    updatePickedChoicesUI(playerChoice, computerChoice);
    let result = playRound(playerChoice, computerChoice);
    if (result == Gamestate.WON) {
        playerWins += 1;
    }
    else if (result == Gamestate.LOST) {
        computerWins += 1;
    }
    updateGameScore(result);
    checkForWincondition();
}
/**
 * Updates the DOM according to the given Result.
 * @param {Gamestate*} result 
 */
function updateGameScore(result) {
    const playerScore = document.querySelector("#player_score");
    const computerScore = document.querySelector("#computer_score");
    const gameOutcome = document.querySelector("#game_outcome");

    gameOutcome.textContent = result;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

/**
 * Updates the displayed choice of the player
 * @param {Choice*} playerChoice 
 * @param {Choice*} computerChoice 
 */
function updatePickedChoicesUI(playerChoice, computerChoice) {
    const computerChoiceUI = createImage(computerChoice);
    const playerChoiceUI = createImage(playerChoice)


    const playerChoiceParentUI = document.querySelector("#playerChoice");
    const computerChoiceParentUI = document.querySelector("#computerChoice");

    Array.from(playerChoiceParentUI.childNodes).forEach((child) => playerChoiceParentUI.removeChild(child));
    Array.from(computerChoiceParentUI.childNodes).forEach((child) => computerChoiceParentUI.removeChild(child));

    playerChoiceParentUI.appendChild(playerChoiceUI);
    computerChoiceParentUI.appendChild(computerChoiceUI);
}

/**
 * Creates an img object and attaches an image to it according to the given Input
 * @param {Choice*} choice 
 * @returns an img object
 */
function createImage(choice) {
    const paperImage = "./img/blatt-papier.png";
    const scissorImage = "./img/schnitt.png";
    const rockImage = "./img/stein.png";

    const img = document.createElement("img");

    if(choice === Choice.ROCK) {
        img.src = rockImage;
        img.alt = "Rock";
    }
    else if (choice === Choice.PAPER) {
        img.src = paperImage;
        img.alt = "Paper";
    }
    else {
        img.src = scissorImage;
        img.alt = "Scissor";
    }

    return img;
}

function checkForWincondition() {
    if (computerWins >= 5) {
        alert("You lost!");
        resetGame();
    }
    else if(playerWins >= 5) {
        alert("You won!");
        resetGame();
    }
}

function resetGame() {
    computerWins = 0;
    playerWins = 0;
}

const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissors");

rockButton.addEventListener("click", () => game(Choice.ROCK));
paperButton.addEventListener("click", () => game(Choice.PAPER));
scissorButton.addEventListener("click", () => game(Choice.SCISSORS));
