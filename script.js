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
 * @returns the players pick from Rock, Paper, Scissors. If players choice is not reasonable returns null
 */
function getPlayerChoice(choice) {
    choice = capitalize(choice);
    if(choice == "Rock") {
        return Choice.ROCK;
    }
    else if(choice == "Paper") {
        return Choice.PAPER;
    }
    else if(choice == "Scissor") {
        return Choice.SCISSORS;
    }
    else {
        return null;
    }
}
