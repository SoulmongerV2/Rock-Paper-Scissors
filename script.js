function playRockPaperScissors(rounds = 5){

    for(let i = 0; i < rounds; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));     //plays a round and outputs results
    }

    function getPlayerChoice(){
        return prompt("Choose Rock, Paper or Scissors.");
    }
    
    function getComputerChoice(){
        const compChoice = Math.floor(Math.random() * 3 + 1);
        switch(compChoice){
            case 1:
                return "Rock";
            case 2:
                return "Paper";
            case 3:
                return "Scissors";
            default:
        }
    }

    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        //console.log(playerSelection,computerSelection); --for testing purposes

        if(playerSelection === computerSelection){
            return [0,"It's a tie."];
        }

        if(playerSelection === "rock"){
            if(computerSelection === "paper"){
                return [-1,"You lost. Paper beats Rock."];
            }
            if(computerSelection === "scissors"){
                return [1,"You won. Rock beats Scissors"];
            }
        }

        if(playerSelection === "paper"){
            if(computerSelection === "scissors"){
                return [-1, "You lost. Scissors beat Paper"];
            }
            if(computerSelection === "rock"){
                return [1, "You won. Paper beats Rock"];
            }
        }

        if(playerSelection === "scissors"){
            if(computerSelection === "rock"){
                return [-1,"You lost. Rock beats Scissors"];
            }
            if(computerSelection === "paper"){
                return [1, "You won. Scissors beat Paper"];
            }
        }
        
    }



}