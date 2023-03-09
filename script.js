function getComputerChoice() {
    let choice = ["rock","paper","scissors"]
    random = Math.floor(Math.random()*3)
    randomChoice = choice[random]
    return randomChoice
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! Paper beats Rock`
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

let result = document.querySelector("#result")
let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")
const inputs = document.querySelectorAll("input")

let playerScoreVal = 0
let computerScoreVal = 0
function playRoundHTML (input) {
    input.addEventListener("click",() => {
        let playerSelection = input.value
        const computerSelection = getComputerChoice()
        let roundPlay = playRound(playerSelection,computerSelection)
        if (roundPlay.includes("Win")) {
            playerScoreVal++
        } else if (roundPlay.includes("Lose")) {
            computerScoreVal++
            result.textContent = roundPlay
        } else {
            playerScoreVal++
            computerScoreVal++
        }
        result.textContent = roundPlay
        playerScore.textContent = `Player Score: ${playerScoreVal}`
        computerScore.textContent = `Computer Score: ${computerScoreVal}`
    })
}
for (i=0; i <inputs.length; i++) {
    playRoundHTML(inputs[i])
}


