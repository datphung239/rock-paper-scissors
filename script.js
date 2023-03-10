// Create function for game
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
// Put function into HTML
let result = document.querySelector("#result")
let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")
const inputPlayer = document.querySelector(".player").querySelectorAll("input")
const inputComputer = document.querySelector(".computer").querySelectorAll("input")
const inputs = document.querySelectorAll("input")

for (i=0; i <inputPlayer.length; i++) {
    playRoundHTML(inputPlayer[i])
}
let playerScoreVal = 0
let computerScoreVal = 0
function playRoundHTML (input) {
    input.addEventListener("click",() => {
        let playerSelection = input.value
        const computerSelection = getComputerChoice()
        let roundPlay = playRound(playerSelection,computerSelection)
        // Reset again
        for (i=0;i<inputs.length;i++) {
            inputs[i].style.backgroundColor = "white"
            console.log(inputs[i])
        }

        // Play game
        if (roundPlay.includes("Win")) {
            playerScoreVal++
            // Color change
            input.style.backgroundColor = "lime"
            for (i=0;i<inputComputer.length;i++) {
                if (inputComputer[i].value === computerSelection) {
                    inputComputer[i].style.backgroundColor = "red"
                }
            }
        } else if (roundPlay.includes("Lose")) {
            computerScoreVal++
            // Color change
            input.style.backgroundColor = "red"
            for (i=0;i<inputComputer.length;i++) {
                if (inputComputer[i].value === computerSelection) {
                    inputComputer[i].style.backgroundColor = "lime"
                }
            }
        } else {
            playerScoreVal++
            computerScoreVal++
        }
        result.textContent = roundPlay
        playerScore.textContent = `Player Score: ${playerScoreVal}`
        computerScore.textContent = `Computer Score: ${computerScoreVal}`

        // Play again
        if (playerScoreVal === 5 || computerScoreVal ===5) {
            playAgain()
        }
    })
}


function playAgain(){
    if (playerScoreVal === 5) {
        result.textContent = `You win !!! ${playerScoreVal}:${computerScoreVal}`
        result.style.color = "lime"
        result.style.fontWeight="bold" 
    } else if (computerScoreVal === 5) {
        result.textContent = `You lose !!! ${playerScoreVal}:${computerScoreVal}`
        result.style.color = "red"
        result.style.fontWeight="bold" 
    }
    for (i=0;i<inputPlayer.length;i++) {
        inputPlayer[i].disabled=true
    }
    let playAgainButton = document.querySelector("#play-again")
    playAgainButton.textContent = `You want to play again?`
    playerScoreVal = 0
    computerScoreVal = 0
}


