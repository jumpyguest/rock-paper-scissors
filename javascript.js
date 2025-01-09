let humanScore = 0, computerScore = 0;
let playerSelect = "";

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const scoreBoard = document.createElement("div");
const choicesDisp = document.createElement("p");
const roundResult = document.createElement("p");
const runningScore = document.createElement("p");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
scoreBoard.style = "margin: 10px 0; height: 155px; border: 4px solid black";
choicesDisp.style = "padding: 5px";
roundResult.style = "padding: 5px; color: blue";
runningScore.style = "padding: 5px; color: green";
scoreBoard.appendChild(choicesDisp);
scoreBoard.appendChild(roundResult);
scoreBoard.appendChild(runningScore);
body.appendChild(scoreBoard);

enableBtnEventListeners();

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function enableBtnEventListeners() {
   rockBtn.addEventListener("click", wrapperRock);
   paperBtn.addEventListener("click", wrapperPaper);
   scissorsBtn.addEventListener("click", wrapperScissors);
}

function disableBtnEventListeners() {
   rockBtn.removeEventListener("click", wrapperRock);
   paperBtn.removeEventListener("click", wrapperPaper);
   scissorsBtn.removeEventListener("click", wrapperScissors);
}

function wrapperRock() {
    playRound("rock", getComputerChoice());
}
function wrapperPaper() {
    playRound("paper", getComputerChoice());
}
function wrapperScissors() {
    playRound("scissors", getComputerChoice());
}

function displayWinner() {
    const resultDiv = document.createElement("div");
    const text = document.createElement("div");
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again?";
    playAgainBtn.style = "margin: 10px 0"
    body.appendChild(resultDiv);
    body.appendChild(text);

    resultDiv.style = "padding: 5px 0";
    text.style = "padding: 5px 0; font-weight: bold; color: red";
    resultDiv.textContent = `Scores: You: ${humanScore}     Computer: ${computerScore}`;
    if (humanScore > computerScore)
        text.textContent = `You win the game!`;
    else if (humanScore < computerScore)
        text.textContent = "You lost...";
    else
        text.textContent = `It's a tie!`;

    disableBtnEventListeners();

    body.appendChild(playAgainBtn);
    let content = document.querySelector("div");
    playAgainBtn.addEventListener("click", () => {
        
        choicesDisp.textContent = "";
        roundResult.textContent = "";
        runningScore.textContent = "";
        resultDiv.textContent = "";
        text.textContent = "";
        playAgainBtn.remove();

        humanScore = 0, computerScore = 0;
        enableBtnEventListeners();
    });
}

function playRound(humanChoice, computerChoice) {
    
    choicesDisp.innerHTML = `Your choice: <strong>${humanChoice}</strong> Computer choice: <strong>${computerChoice}</strong>`;
    
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore++;
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = 'Draw!';
    } else if (humanChoice === undefined) {
        roundResult.textContent = "You entered an invalid choice.";
    } 
    else {
        computerScore++;
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    }
    runningScore.innerHTML = `Current Score: You: <b>${humanScore}</b> Computer: <b>${computerScore}</b>`;

    if (humanScore + computerScore === 5)
        displayWinner();
}

// function getHumanChoice () {
  
//     let y = prompt("Enter your input: ");
//     let input = y.toLowerCase();

//     if (input === 'rock' || input === 'paper' || input === 'scissors') {
//         return input;
//     } else {
//         return undefined;
//     }
    
// }