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
        computerSelection = getComputerChoice() to reset computerSelection for new round
        Prompt user input to reset playerSelection for new round
        playRound()

Call getScore()

*/

const rock_button = document.createElement('button');
rock_button.innerText = 'rock';
document.body.appendChild(rock_button);

const scissor_button = document.createElement('button');
scissor_button.innerText = 'scissors';
document.body.appendChild(scissor_button);

const paper_button = document.createElement('button');
paper_button.innerText= 'paper';
document.body.appendChild(paper_button);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

const choice = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;

// Returns random choice of rock, paper, scissors by computer

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// Plays one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`it's a tie, you both chose ${playerSelection}`);

    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`you win! ${playerSelection} beats ${computerSelection}`);
        return playerScore += 1;

    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")) {
        console.log(`you lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore += 1;
    }
}

// Returns final score for player and computer (winner or loser)

function getScore(playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log(`you tied! your score is ${playerScore}, and the computer's score is ${computerScore}`);

    } else if (playerScore > computerScore) {
        console.log(`you are the winner! :\( your score is ${playerScore}, and the computer\'s score is ${computerScore}`);

    } else {
        console.log(`you are the loser :\( your score is ${playerScore}, and the computer's score is ${computerScore}`);
    }
}

// Plays 5 rounds, resets player and computer choices each round

function game() {
    //for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("rock, scissors, or paper?");
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    // }
}

game();
getScore(playerScore, computerScore);



