/* 
Initialise choices array: ["rock", "paper", "scissors"]
Initiailse playerScore, computerScore variables with a value of 0
Declaire/initialise playerSelection and computerSelection variables

Declare a function called getComputerChoice()
    randomly return: "rock", "paper", "scissors"

Store computer choice in a constant variable named computerSelection()

Prompt user input to choose from one of the strings: rock, paper, or scissors

Store the input in a variable named playerSelection and change it to .lowerCase()

Declare playRound(playerSelection, computerSelection that plays one round of the game
    if playerSelection or computerSelection beats one or the other
    print win/loss message to console
    increment playerScore/computerScore by one depdending on win/loss outcomes

Declare getScore() function
    if computerScore is more than playerScore, or vice versa
        print score and whoever is the winner/loser message

Declare game() function to play five rounds
    for (i = 0; i < 5; i++)
        Call getComputerChoice() to reset computerSelection for new round
        Prompt user input to reset playerSelection for new round
        playRound()

Call getScore()

*/

const choice = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
    let userInput = prompt("rock, paper, or scissors?");
    return userInput = userInput.toLowerCase();
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("it's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("you lose! paper beats rock");
        return computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("you win! rock beats scissors");
        return playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("you win! paper beats rock");
        return playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("you lose! scissors beat paper");
        return computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("you lose! rock beats scissor");
        return computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("you win! scissor beats paper");
        return playerScore += 1;
    }
}

function score(playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log("you tied! your score is " + playerScore, "and the computer's score is " + computerScore);
    } else if (playerScore > computerScore) {
        console.log("you are the winner! :\) your score is " + playerScore, "and the computer's score is " + computerScore);
    } else {
        console.log("you are the loser :\( your score is " + playerScore, "and the computer's score is " + computerScore);
    }
}

function resetChoices() {
    getComputerChoice();
    getPlayerChoice();
}
    
/*

Declare a function called game()

Call the playRound(userSelection, computerSelection) function inside the game() function to play a 5 round game

Keep score of wins/losses at the end of each round

Return a string displaying who the winner or loser is after the 5 rounds end

*/


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        score(playerScore, computerScore);
        resetChoices();
    }
}

game();