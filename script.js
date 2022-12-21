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
 * @returns the players pick from Rock, Paper, Scissors.
 */
function getPlayerChoice(choice) {
    choice = capitalize(choice);
    if(choice == "Rock") return Choice.ROCK;
    else if(choice == "Paper") return Choice.PAPER;
    else return Choice.SCISSORS;
}

/**
 * Plays around of rock, paper, scissors with the players choice and a computer choice
 * @param {Choice*} playerChoice 
 * @param {Choice*} computerChoice 
 * @returns 
 */
function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) return Gamestate.DRAW;
    else if (playerChoice === Choice.ROCK) {
        if(computerChoice === Choice.PAPER) return Gamestate.LOST;
        else return Gamestate.WON;
    }
    else if (playerChoice === Choice.PAPER) {
        if(computerChoice === Choice.ROCK) return Gamestate.WON;
        else return Gamestate.WON;
    }
    else {
        if(computerChoice === Choice.ROCK) return Gamestate.LOST;
        else return Gamestate.WON;
    }
}
