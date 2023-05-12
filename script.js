let roundCount;
let playerScore;
let compScore;
let gameLog = document.querySelector('.game-log');

gameInit();

let choiceButtons = document.querySelectorAll('.player-choice');
choiceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.id);
    })});

function gameInit(){
    roundCount = 0;
    playerScore = 0;
    compScore = 0;
}

function playRound(playerChoice){
    /**************************************************
     *Compares the players' choices and decides a winner. 
        *Returns an array with a game result on index [0]  and game description on index [1], in reference to player_one
        *Results:
        *   player_one won  -  +1
        *   players tied    -   0
        *   player_one lost -   1
    ***************************************************/
    let compChoice = getComputerChoice();
    let winner = getWinner();
    awardPoints(winner);
    roundCount++;
    logGame();

    function logGame(){
        let newLogLine = document.createElement('p');
        newLogLine.classList.add('game-log-line');
        newLogLine.textContent = generateLog();
        gameLog.appendChild(newLogLine);
    }

    function generateLog(){
        return `Player: ${playerChoice}, CPU: ${compChoice}, Winner: ${winner}`;
    }

    function awardPoints(winner){
        switch(winner){
            case playerChoice:
                playerScore++;
                break;
            case compChoice:
                compScore++;
                break;
            default:       
        }

        console.log(`player ${playerScore}, comp ${compScore}`);
    }

    function getComputerChoice(){
        /**************************************************
         * Returns "Rock", "Paper" or "Scissors" randomly
         **************************************************/
    
        const compChoice = Math.floor(Math.random() * 3 + 1);
        switch(compChoice){
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
            default:
        }
    }

    function getWinner(){
        if(playerChoice === compChoice){
            return "Tie";
        }
    
        if(playerChoice === "rock"){
            if(compChoice === "paper"){
                return "CPU";
            }
            if(compChoice === "scissors"){
                return "Player";
            }
        }
    
        if(playerChoice === "paper"){
            if(compChoice === "scissors"){
                return "CPU";
            }
            if(compChoice === "rock"){
                return "Player";
            }
        }
    
        if(playerChoice === "scissors"){
            if(compChoice === "rock"){
                return "CPU";
            }
            if(compChoice === "paper"){
                return "Player";
            }
        }
    }
    /*
    function getWinner(){
        if(playerChoice === compChoice){
            return [0,"It's a tie."];
        }
    
        if(playerChoice === "rock"){
            if(compChoice === "paper"){
                return [-1,"You lost. Paper beats Rock."];
            }
            if(compChoice === "scissors"){
                return [1,"You won. Rock beats Scissors"];
            }
        }
    
        if(playerChoice === "paper"){
            if(compChoice === "scissors"){
                return [-1, "You lost. Scissors beat Paper"];
            }
            if(compChoice === "rock"){
                return [1, "You won. Paper beats Rock"];
            }
        }
    
        if(playerChoice === "scissors"){
            if(compChoice === "rock"){
                return [-1,"You lost. Rock beats Scissors"];
            }
            if(compChoice === "paper"){
                return [1, "You won. Scissors beat Paper"];
            }
        }
    }
    */
}

