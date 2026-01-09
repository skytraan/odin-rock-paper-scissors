function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: rock | paper | scissors");
    return humanChoice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        switch(humanChoice){
            case "rock":
                switch (computerChoice){
                    case "rock": 
                        console.log("Tie! You both chose rock.")
                        break;
                    case "scissors":
                        console.log("You win! Rock beats scissors.")
                        humanScore++;
                        break;
                    case "paper":            
                        console.log("You lose! Paper beats rock.")
                        computerScore++;
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice){
                    case "rock":
                        console.log("You lose! Rock beats scissors.")
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("Tie! You both chose scissors.")
                        break;
                    case "paper":    
                        console.log("You win! Scissors beats paper.")
                        humanScore++;      
                        break;  
                }
                break;
            case "paper":
                switch (computerChoice){
                    case "rock":
                        console.log("You win! Paper beats rock.")
                        humanScore++;   
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beats paper.")
                        computerScore++;
                        break;
                    case "paper":      
                        console.log("Tie! You both chose paper.")
                        return;      
                }
                break;
        }
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Human score is: " + humanScore);
        console.log("Computer score is " + computerScore);
    }

        console.log("Game over!")
        console.log("Human score is: " + humanScore);
        console.log("Computer score is " + computerScore);

}

playGame();