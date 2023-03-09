function getComputerChoice() {
    let choice = ["rock","paper","scissors"]
    random = Math.floor(Math.random()*3)
    randomChoice = choice[random]
    return randomChoice
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "Draw!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock breaks Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors cuts Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock breaks Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors cuts Paper"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

// function game() {
//     result = {}
//     for (i=1;i<=5;i++) {
//         if (playRound(playerSelection,computerSelection).includes("Win")) {
//             result["you"]++
//         } else if (playRound(playerSelection,computerSelection).includes("Lose")) {
//             result["computer"]++
//         } else {
//             result["you"]++
//             result["computer"]++
//         }
//     }
//     return result
// }

