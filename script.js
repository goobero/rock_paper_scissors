/* 

Declare a function called getComputerChoice that makes the computer randomly return one of the following strings: rock, paper, scissors

Store computer choice in a constant variable named computerSelection

Prompt user input to choose from one of the strings: rock, paper, or scissors

Store the input in a constant variable named playerSelection and change it to .lowerCase()

Declare a function called playRound (that takes computerSelection and userSelection as parameters) that plays one round of the game

Return a string that declares the winner of the round where paper beats rock, rock beats scissors, and scissors beat paper. e.g. "You Lose! Paper beats rock" 

Call the playRound function

*/

const choice = ["rock", "paper", "scissors"];

let playerSelection = prompt("rock, paper, or scissors?");
playerSelection = playerSelection.toLowerCase();

computerSelection = function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound (userSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "it's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "you lose! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "you win! paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "you lose! scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lose! rock beats scissor";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "you win! scissor beats paper";
    }
}