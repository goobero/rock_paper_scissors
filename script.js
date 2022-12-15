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

computerSelection = function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}