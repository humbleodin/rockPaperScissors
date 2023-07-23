const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// computer picks random rock paper or scissor
function getComputerSelection () {
    let random = Math.random();
    if (random < 0.33) {
        return rock;
    }
    else if (random >= 0.33 && random <= 0.66) {
        return paper;
    }
    else {
        return scissors;
    }
}

// player picks rock paper or scissor
// function getPlayerSelection() {
//     let playerChoice = prompt("Scissors, rock or paper?");
//     let playerSelection = playerChoice.toLowerCase();
//     return playerSelection;
// }

// play a round
function playRound (playerSelection, computerSelection) {
    // let playerScore = 0;
    // let computerScore = 0;
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection === "scissors" && computerSelection === scissors) || (playerSelection === "scissor" && computerSelection === scissors)) {
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === paper) {
        // computerScore++;
        return "You lose";
    }
    else if (playerSelection === "rock" && computerSelection === scissors) {
        // playerScore++;
        return "You win";
    }
    // player picks paper
    else if (playerSelection === "paper" && computerSelection === rock) {
        // playerScore++;
        return "You win";
    }
    else if (playerSelection === "paper" && computerSelection === scissors) {
        // computerScore++;
        return "You lose";
    }
    // player picks scissors
    else if ((playerSelection === "scissors" && computerSelection === rock) || (playerSelection === "scissor" && computerSelection === rock)) {
        // computerScore++;
        return "You lose";
    }
    else if ((playerSelection === "scissors" && computerSelection === paper) || (playerSelection === "scissor" && computerSelection === paper)) {
        // playerScore++;
        return "You win";
    }
    else if (!(playerSelection === rock) || !(playerSelection === paper) || !(playerSelection === scissors)) {
        return "Bruh. Do you know how to play?\n'" + playerSelection + "' isn't even an option...\nSo you lose. Loser.";
    }
}

// output the winner
function game () {
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    console.log("You chose " + playerSelection + " \nComputer chose " + computerSelection)
    return playRound(playerSelection, computerSelection);
}

// function threeGames () {
//     console.log(game())
//     console.log(game())
//     console.log(game())
// }
// console.log(threeGames())

// const rockjs = document.querySelector("#rock");
// // rockjs.addEventListener("click", storeRock);
// rockjs.addEventListener("click", storeRock);

// const paperjs = document.querySelector("#paper");
// paperjs.addEventListener("click", storePaper);

// const scissorsjs = document.querySelector("#scissors");
// scissorsjs.addEventListener("click", storeScissors);

// function aRound() {
//     console.log("hi")
// }




// function storeRock() {
//     let playerSelection = rock;
//     let computerSelection = getComputerSelection();
//     console.log(`Comp chose ${computerSelection}`);
//     console.log(`You chose ${playerSelection}`);
//     console.log(playRound(playerSelection, computerSelection));
// }

// function storePaper() {
//     let playerSelection = paper;
//     let computerSelection = getComputerSelection();
//     console.log(`Comp chose ${computerSelection}`);
//     console.log(`You chose ${playerSelection}`);
//     console.log(playRound(playerSelection, computerSelection));
// }
// function storeScissors() {
//     let playerSelection = scissors;
//     let computerSelection = getComputerSelection();
//     console.log(`Comp chose ${computerSelection}`);
//     console.log(`You chose ${playerSelection}`);
//     console.log(playRound(playerSelection, computerSelection));
// }

// get player choice
    // if .rock button press, console log you chose rock
    // else paper, then scissor

// function helperFunction(className) {
//     console.log(`Clicked button class: ${className}`)
// }

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`You chose ${button.id}`);
        let playerSelection = button.id;
        let computerSelection = getComputerSelection();
        console.log(`PC chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    });
})


const results = document.querySelector("#results");

function displayPlayerChoice() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(`You chose ${button.id}`);
            let playerSelection = button.id;
            let computerSelection = getComputerSelection();
            console.log(`PC chose ${computerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
        })
    })
}