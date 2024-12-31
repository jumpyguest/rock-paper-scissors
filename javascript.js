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

// console.log(getComputerChoice());

function getHumanChoice () {
  
    let y = prompt("Enter your input: ");
    let input = y.toLowerCase();

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        return undefined;
    }
    
}

// console.log(getHumanChoice());
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
        if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerScore++;
                console.log("You lose! paper beats rock!");
            } else if (computerChoice === 'scissors') {
                humanScore++;
                console.log("You win! rock beats scissors!");
            } else {
                console.log("Draw!");
            }
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                console.log("You win! paper beats rock!");
            } else if (computerChoice === 'scissors') {
                computerScore++;
                console.log("You lose! scissors beats paper!");
            } else {
                console.log("Draw!");
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                console.log("You lose! rock beats scissors!");
            } else if (computerChoice === 'paper') {
                humanScore++;
                console.log("You win! scissors beats paper");
            } else {
                console.log("Draw!");
            }
        } else {
            console.log("You entered an invalid choice.")
        }
    }
}

playGame();
