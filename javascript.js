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

function getHumanChoice () {
  
    let y = prompt("Enter your input: ");
    let input = y.toLowerCase();

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        return undefined;
    }
    
}

function playGame() {

    let humanScore = 0, computerScore = 0;

    function enableBtnEventListeners() {

        rockBtn.addEventListener("click", handlerRock);
        paperBtn.addEventListener("click", handlerPaper);
        scissorsBtn.addEventListener("click", handlerScissors);
    }
    const body = document.querySelector("body");

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    rockBtn.textContent = "rock";
    paperBtn.textContent = "paper";
    scissorsBtn.textContent = "scissors";

    function handlerRock() {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
    }
    
    function handlerPaper() {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    }

    function handlerScissors() {
        const computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
    }
    
    enableBtnEventListeners();

    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);
    
    // for (x = 0; x < 5; x++) {
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
    // }

    function displayWinner() {
        const resultDiv = document.createElement("div");
        const text = document.createElement("div");
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again?";
        playAgainBtn.style = "margin: 10px"
        body.appendChild(resultDiv);
        body.appendChild(text);

        resultDiv.style = "padding:5px";
        text.style = "padding: 5px; font-weight: bold; color: red";
        resultDiv.textContent = `Scores: You: ${humanScore}     Computer: ${computerScore}`;
            //console.log(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
        if (humanScore > computerScore)
            text.textContent = `You win the game!`;
                //console.log("You win the game!");
        else if (humanScore < computerScore)
            text.textContent = "You lost...";
                //console.log("You lost...");
        else
            text.textContent = `It's a tie!`;
                //console.log("It's a tie!");

        rockBtn.removeEventListener("click", handlerRock);
        paperBtn.removeEventListener("click", handlerPaper);
        scissorsBtn.removeEventListener("click", handlerScissors);

        body.appendChild(playAgainBtn);
        let content = document.querySelector("div");
        playAgainBtn.addEventListener("click", () => {
            
            while (content !== null) {
                content.remove();
                content = document.querySelector("div");
            }
            playAgainBtn.remove();

            humanScore = 0, computerScore = 0;
            enableBtnEventListeners();
        });
    }

    function playRound(humanChoice, computerChoice) {
        const choicesDisp = document.createElement("div");
        const roundResult = document.createElement("div");
        const runningScore = document.createElement("div");
        choicesDisp.style = "padding: 5px";
        roundResult.style = "padding: 5px; color: blue";
        runningScore.style = "padding: 5px; color: green";
        choicesDisp.innerHTML = `Your choice: <strong>${humanChoice}</strong> Computer choice: <strong>${computerChoice}</strong>`;
        body.appendChild(choicesDisp);
        body.appendChild(roundResult);
        body.appendChild(runningScore);
            //console.log(`Your choice: ${humanChoice} \nComputer choice: ${computerChoice}`);
        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) {
                humanScore++;
                roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                //console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === computerChoice) {
            roundResult.textContent = 'Draw!';
            //console.log("Draw!");
        } else if (humanChoice === undefined) {
            roundResult.textContent = "You entered an invalid choice.";
            //console.log("You entered an invalid choice.")
        } 
        else {
            computerScore++;
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
            //console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        }
        runningScore.innerHTML = `Current Score: You: <b>${humanScore}</b> Computer: <b>${computerScore}</b>`;

        if (humanScore + computerScore === 5)
            displayWinner();
    }
}

playGame();
