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

const choice = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const buttonContainer = document.createElement('div');
buttonContainer.classList.add("buttondiv");
document.body.appendChild(buttonContainer);

const rockButton = document.createElement('button');
rockButton.classList.add('button');
rockButton.textContent = 'rock';
buttonContainer.appendChild(rockButton);
document.querySelector('rockButton');
rockButton.setAttribute('value', 'rock');

const paperButton = document.createElement('button');
paperButton.classList.add('button');
paperButton.textContent= 'paper';
buttonContainer.appendChild(paperButton);
document.querySelector('paperButton');
paperButton.setAttribute('value', 'paper');

const scissorButton = document.createElement('button');
scissorButton.classList.add('button');
scissorButton.textContent = 'scissors';
buttonContainer.appendChild(scissorButton);
document.querySelector('scissorButton');
scissorButton.setAttribute('value', 'scissors');

const resultsDisplayRound = document.createElement('div');
resultsDisplayRound.classList.add('results');
document.body.appendChild(resultsDisplayRound);


const resultsDisplayPoints = document.createElement('div');
document.body.appendChild(resultsDisplayPoints);
resultsDisplayPoints.classList.add('results');

const winner = document.createElement('winner');
document.body.appendChild(winner);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        playerSelection = event.target.value;
        game();
        getScore(playerScore, computerScore)
        if ((playerScore === 5) || (computerScore === 5)) {
            endGame();
        }
        tellWinner();
    })
});

function endGame() {
    buttons.forEach((button) => button.disabled = true)
    if ((playerScore > computerScore)) {
        winner.textContent = "you win!"
    } else {
        winner.textContent = "computer wins!"
    }
}


// Returns random choice of rock, paper, scissors by computer

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// Plays one round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsDisplayRound.textContent = (`it's a tie, you both chose ${playerSelection}`);

    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        resultsDisplayRound.textContent = (`you win! ${playerSelection} beats ${computerSelection}`);
        return playerScore += 1;

    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")) {
        resultsDisplayRound.textContent = (`you lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore += 1;
    }
}

// Returns final score for player and computer (winner or loser)

function getScore(playerScore, computerScore) {
    if (playerScore === computerScore) {
        resultsDisplayPoints.textContent = (`your score: ${playerScore} computer score: ${computerScore}`);

    } else if (playerScore > computerScore) {
        resultsDisplayPoints.textContent = (`your score: ${playerScore} computer score: ${computerScore}`);

    } else {
        resultsDisplayPoints.textContent = (`your score: ${playerScore} computer score: ${computerScore}`);
    }
}

// Plays 5 rounds, resets player and computer choices each round

function game() {
    // for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        // playerSelection = prompt("rock, scissors, or paper?");
        // playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection);
    //}
}

// game();
// getScore(playerScore, computerScore);



