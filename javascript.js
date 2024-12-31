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

    for (x = 0; x < 5; x++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);
    if (humanScore > computerScore)
        console.log("You win the game!");
    else if (humanScore < computerScore)
        console.log("You lost...");
    else
        console.log("It's a tie!");

    function playRound(humanChoice, computerChoice) {
        console.log(`Your choice: ${humanChoice} \nComputer choice: ${computerChoice}`);
        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')) {
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if (humanChoice === undefined) {
            console.log("You entered an invalid choice.")
        } 
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        }
    }
}

playGame();
