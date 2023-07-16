// // const playerSelection = getPlayerSelection();

// // const computerChoice = "paper";
// // const computerSelection = getComputerSelection();


// function getComputerSelection () {
//     return computerChoice;
// }

// function getPlayerSelection () {
//     let playerChoice = prompt("Rock paper or scissors");
//     let playerSelection = playerChoice.toLowerCase();
//     return playerSelection;
// }

// function playRound(playerSelection, computerChoice) {
//     if (playerSelection === "rock" && computerChoice === "paper") {
//         return "You lose, paper beats rock";
//     }
//     else if (playerSelection === "scissor" || playerSelection === "scissors") {
//         return "You win";
//     }
//     else {
//         return "tie";
//     }
// }
// function game () {
    
// }

// console.log(playRound(playerSelection, computerChoice));





const rock = "rock";
const paper = "paper";
const scissor = "scissors";

// computer picks random rock paper or scissor
function getComputerSelection () {
    let random = Math.random();
    if (random < 0.33) {
        return rock;
    }
    // instead of line 49 parameter, "else if random > 0.66, return paper" then "else return scissors"
    else if (random >= 0.33 && random <= 0.66) {
        return paper;
    }
    else {
        return scissor;
    }

}

// player picks rock paper or scissor
function getPlayerSelection() {
    let playerChoice = prompt("Scissors, rock or paper?");
    let playerSelection = playerChoice.toLowerCase();
    return playerSelection;
}

// play a round
function decideWinner (playerSelection, computerSelection) {
    // player picks rock
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection === "scissors" && computerSelection === scissor) || (playerSelection === "scissor" && computerSelection === scissor)) {
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === paper) {
        return "You lose";
    }
    else if (playerSelection === "rock" && computerSelection === scissor) {
        return "You win";
    }
    // player picks paper
    else if (playerSelection === "paper" && computerSelection === rock) {
        return "You win";
    }
    else if (playerSelection === "paper" && computerSelection === scissor) {
        return "You lose";
    }
    // player picks scissors
    else if ((playerSelection === "scissors" && computerSelection === rock) || (playerSelection === "scissor" && computerSelection === rock)) {
        return "You lose";
    }
    else if ((playerSelection === "scissors" && computerSelection === paper) || (playerSelection === "scissor" && computerSelection === paper)) {
        return "You win";
    }
    else if (!(playerSelection === rock) || !(playerSelection === paper) || !(playerSelection === scissor)) {
        return "Bruh. Do you know how to play?\n'" + playerSelection + "' isn't even an option...\nSo you lose. Loser.";
    }
}
// decide who wins
// output the winner
function game () {
    let computerSelection = getComputerSelection();
    let playerSelection = getPlayerSelection();
    console.log("You chose " + playerSelection + " \nComputer chose " + computerSelection)
    return decideWinner(playerSelection, computerSelection);
}

function threeGames () {
    console.log(game())
    console.log(game())
    console.log(game())
}
console.log(threeGames())