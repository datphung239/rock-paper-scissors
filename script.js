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
/*

// Solution 1
// Put function into HTML
let result = document.querySelector("#result")
let playerScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")
const inputPlayer = document.querySelector(".player").querySelectorAll("input")
const inputComputer = document.querySelector(".computer").querySelectorAll("input")
const inputs = document.querySelectorAll("input")
let playerScoreVal = 0
let computerScoreVal = 0

function playRoundHTML (input) {
    input.addEventListener("click",() => {
        let playerSelection = input.value
        const computerSelection = getComputerChoice()
        let roundPlay = playRound(playerSelection,computerSelection)
        // Reset color again 
        inputs.forEach((input) => input.style.backgroundColor = "white")
        // Play game
        if (roundPlay.includes("Win")) {
            playerScoreVal++
            // Color change
            input.style.backgroundColor = "lime"
            inputComputer.forEach((eachInputComputer) => {
                if (eachInputComputer.value === computerSelection) {
                    eachInputComputer.style.backgroundColor = "red"
                }
            })
        } else if (roundPlay.includes("Lose")) {
            computerScoreVal++
            // Color change
            input.style.backgroundColor = "red"
            inputComputer.forEach((eachInputComputer) => {
                if (eachInputComputer.value === computerSelection) {
                    eachInputComputer.style.backgroundColor = "lime"
                }
            })
        } else {
            playerScoreVal++
            computerScoreVal++
        }
        result.textContent = roundPlay
        playerScore.textContent = `Player Score: ${playerScoreVal}`
        computerScore.textContent = `Computer Score: ${computerScoreVal}`
        // Play again
        if (playerScoreVal === 5 || computerScoreVal === 5) {
            playAgain()
        }
    })
}

inputPlayer.forEach((input) => {
    playRoundHTML(input)
})
function playAgain(){
    // Change status color, disable button after game finish
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
    // Restart game from the begin
    const playAgainButton = document.createElement("button")
    playAgainButton.innerHTML = "You want to play again?";
    document.body.appendChild(playAgainButton);

    playAgainButton.addEventListener("click",()=>{
        playAgainButton.remove()
        result.textContent = "Please select your choice!"
        result.style.color = "white"
        playerScore.textContent = `Player Score: ${playerScoreVal = 0}`
        computerScore.textContent = `Computer Score: ${computerScoreVal = 0}`
        for (i=0;i<inputs.length;i++) {
            inputs[i].style.backgroundColor = "white"
            if (i < inputPlayer.length) {
                inputs[i].disabled=false
            }
        }
    })

*/

// Solution 2

result = document.querySelector("#result")
playerScore = document.querySelector("#player-score")
computerScore = document.querySelector("#computer-score")
inputsPlayer = document.querySelector(".player")

let playerScoreVal = 0
let computerScoreVal = 0

inputsPlayer.addEventListener("click",execute = (click)=> {
    if (click["srcElement"].value === undefined) return
    // Reset color
    styledElement = document.querySelectorAll('.container *[style]')
    styledElement.forEach((e) => e.removeAttribute("style"))
    // Set variables
    const inputPlayer = click["srcElement"]
    const playerSelection = inputPlayer.value
    const computerSelection = getComputerChoice()
    const inputComputer = document.querySelector(`.computer input[value="${computerSelection}"]`)
    const roundPlay = playRound(playerSelection,computerSelection)
    // Play game
    if (roundPlay.includes("Win")) {
        playerScoreVal++
        inputPlayer.style.backgroundColor = "lime"
        inputComputer.style.backgroundColor = "red"
    } else if (roundPlay.includes("Lose")) {
        computerScoreVal++
        inputPlayer.style.backgroundColor = "red"
        inputComputer.style.backgroundColor = "lime"
    } else {
        playerScoreVal++
        computerScoreVal++
        inputPlayer.style.backgroundColor = "yellow"
        inputComputer.style.backgroundColor = "yellow"
    }
    result.textContent = roundPlay
    playerScore.textContent = `Player Score: ${playerScoreVal}`
    computerScore.textContent = `Computer Score: ${computerScoreVal}`
    
    // Play again
    if (playerScoreVal === 5 || computerScoreVal === 5) {
        playAgain()
    }
})

function playAgain(){
    // Change status color, disable button after game finish
    if (playerScoreVal === computerScoreVal) {
        result.textContent = `Tie !!! ${playerScoreVal}:${computerScoreVal}`
        result.style.color = "yellow"
        result.style.fontWeight="bold" 
    } else if (playerScoreVal > computerScoreVal) {
        result.textContent = `You win !!! ${playerScoreVal}:${computerScoreVal}`
        result.style.color = "lime"
        result.style.fontWeight="bold" 
    } else {
        result.textContent = `You lose !!! ${playerScoreVal}:${computerScoreVal}`
        result.style.color = "red"
        result.style.fontWeight="bold" 
    }
    inputsPlayer.querySelectorAll("input").forEach((input) => {
        input.disabled=true
    })
    // Restart game from the begin
    const playAgainButton = document.createElement("button")
    playAgainButton.textContent = "You want to play again?";
    document.body.appendChild(playAgainButton);

    playAgainButton.addEventListener("click",()=>{
        playAgainButton.remove()
        result.textContent = "Please select your choice!"
        result.style.color = "white"
        playerScore.textContent = `Player Score: ${playerScoreVal = 0}`
        computerScore.textContent = `Computer Score: ${computerScoreVal = 0}`
        document.querySelectorAll("input").forEach((eachInput) => {
            eachInput.removeAttribute("style")
            eachInput.disabled=false
        })
    })
}


