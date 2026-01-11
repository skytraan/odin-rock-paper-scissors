let humanScore = 0;
let computerScore = 0;
let playRoundToggle = false;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const resultsContainer = document.querySelector("#results");

const humanChoiceContainer = document.querySelector("#human-choice");
const computerChoiceContainer = document.querySelector("#computer-choice");
const winLossContainer = document.querySelector("#win-loss");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    if (playRoundToggle == false){
        const scoreContainer = document.querySelector("#score");
        scoreContainer.textContent = "";
    }
    playRoundToggle = true;

    switch (computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice){
        case "rock":
            switch (computerChoice){
                case "rock": 
                    humanChoiceContainer.textContent = "You chose: rock."
                    computerChoiceContainer.textContent = "Computer chose: rock."
                    winLossContainer.textContent = "Tie! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    break;
                case "scissors":
                    humanChoiceContainer.textContent = "You chose: rock."
                    computerChoiceContainer.textContent = "Computer chose: scissors."
                    humanScore++;
                    if (humanScore == 5){
                        winLossContainer.textContent = "Game over! You won!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else {
                        winLossContainer.textContent = "You win! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                    }
                    break;
                case "paper":            
                    humanChoiceContainer.textContent = "You chose: rock."
                    computerChoiceContainer.textContent = "Computer chose: paper."
                    computerScore++;
                    if (computerScore == 5){
                        winLossContainer.textContent = "Game over! You lost!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else { 
                        winLossContainer.textContent = "You lose! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    }
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice){
                case "rock":
                    humanChoiceContainer.textContent = "You chose: scissors."
                    computerChoiceContainer.textContent = "Computer chose: rock."
                    computerScore++;
                    if (computerScore == 5){
                        winLossContainer.textContent = "Game over! You lost!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else {
                        winLossContainer.textContent = "You lose! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    }                                                    
                    break;
                case "scissors":
                    humanChoiceContainer.textContent = "You chose: scissors."
                    computerChoiceContainer.textContent = "Computer chose: scissors."
                    winLossContainer.textContent = "Tie! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    break;
                case "paper":    
                    humanChoiceContainer.textContent = "You chose: scissors."
                    computerChoiceContainer.textContent = "Computer chose: paper."
                    humanScore++;      
                    if (humanScore == 5){
                        winLossContainer.textContent = "Game over! You won!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else {
                        winLossContainer.textContent = "You win! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    }                                                    
                    break;  
            }
            break;
        case "paper":
            switch (computerChoice){
                case "rock":
                    humanChoiceContainer.textContent = "You chose: paper."
                    computerChoiceContainer.textContent = "Computer chose: rock."
                    humanScore++;   
                    if (humanScore == 5){
                        winLossContainer.textContent = "Game over! You won!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else {
                        winLossContainer.textContent = "You win! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    }
                    break;
                case "scissors":
                    humanChoiceContainer.textContent = "You chose: paper."
                    computerChoiceContainer.textContent = "Computer chose: scissors."
                    computerScore++;
                    if (computerScore == 5){
                        winLossContainer.textContent = "Game over! You lost!: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore; 
                        humanScore = 0;
                        computerScore = 0;
                    }
                    else {
                    winLossContainer.textContent = "You lose! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    }
                    break;
                case "paper":      
                    humanChoiceContainer.textContent = "You chose: paper."
                    computerChoiceContainer.textContent = "Computer chose: paper."
                    winLossContainer.textContent = "Tie! The score is: \n" 
                                                    + "You: " + humanScore + " | "  + "Computer: " + computerScore;
                    return;      
            }
            break;
    }
}


