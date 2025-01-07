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

    const body = document.querySelector("body");

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    rockBtn.textContent = "rock";
    paperBtn.textContent = "paper";
    scissorsBtn.textContent = "scissors";

    const resultDiv = document.createElement("div");
    const text = document.createElement("div");
        
    
    rockBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
    });
    paperBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    });
    scissorsBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
    });

    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);
    body.appendChild(resultDiv);
    body.appendChild(text);
    // for (x = 0; x < 5; x++) {
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
    // }
    resultDiv.style = "padding:5px";
    text.style = "padding: 5px";
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

    function playRound(humanChoice, computerChoice) {
        const choicesDisp = document.createElement("div");
        const roundResult = document.createElement("div");
        choicesDisp.style = "padding: 5px";
        roundResult.style = "padding: 5px; color: blue";
        choicesDisp.innerHTML = `Your choice: <strong>${humanChoice}</strong> Computer choice: <strong>${computerChoice}</strong>`;
        body.appendChild(choicesDisp);
        body.appendChild(roundResult);
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
    }
}



playGame();
