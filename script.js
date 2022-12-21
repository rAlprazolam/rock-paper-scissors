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
    DRAW: "It`s a draw!"
};

/**
 * @param {String*} word 
 * @returns a the word capitalized
 */
function capitalize(word) {
    arr = Array.from(word);
    arr[0] = arr[0].toUpperCase(); 
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    return arr.join("");
}

/**
 * @returns Returns a random pick from Rock, Paper, Scissors
 */
function getComputerChoice() {
    const CHOICES = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

/**
 * @param {String*} choice 
 * @returns the players pick from Rock, Paper, Scissors. If no reasonable choice was given returns null.
 */
function getPlayerChoice(choice) {
    choice = capitalize(choice);
    if(choice == "Rock") return Choice.ROCK;
    else if(choice == "Paper") return Choice.PAPER;
    else if(choice == "Scissors") return Choice.SCISSORS;
    else return null;
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
function game() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Rock, Paper oder Scissors: ");
    playerChoice = getPlayerChoice(playerChoice);
    while (playerChoice === null) {
        console.log("Your input was invalid! Try again!");
        playerChoice = prompt("Rock, Paper oder Scissors: ");
        playerChoice = getPlayerChoice(playerChoice);
    }
    result = playRound(playerChoice, computerChoice);
    console.log(result);
    if(result == Gamestate.DRAW) return;
    else if (result == Gamestate.WON) playerWins += 1;
    else computerWins += 1;
}

/**
 * Starts a best of n of rock, paper, scissors. If n is even n will be assigned a new value that will be equal to the input of n+1
 * @param {Number*} n 
 */
function bestOfGames(n) {
    n = Math.floor(n/2)+ 1;
    while(playerWins < n && computerWins < n) {
        game();
    }
    let result = Gamestate.DRAW;
    if(playerWins >= n) result = Gamestate.WON;
    else result = Gamestate.LOST;

    console.log(`The computer won ${computerWins} rounds.`);
    console.log(`The player won ${playerWins} rounds`);
    console.log(result);
}
