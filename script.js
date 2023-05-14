let roundCount;

const comp = {
    name: "Computer",
    icon: null,
    currentScore: 0,
    gamesWon: 0,
    gamesLost: 0,
    currentChoice: null,
}

const player = {
    name: "Player",
    icon: null,
    currentScore: 0,
    gamesWon: 0,
    gamesLost: 0,
    currentChoice: null,
}

const gameLog = document.querySelector('.game-log');
const choiceButtons = document.querySelectorAll('.player-choice');
const playerScoreDisplay = document.querySelector('#player-score-el');
const compScoreDisplay = document.querySelector('#comp-score-el');


gameInit();




function gameInit(){

    //reset properties
    comp.currentChoice = null;
    comp.currentScore = 0;
    player.currentChoice = null;
    player.currentScore = 0;

    choiceButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            player.currentChoice = btn.id;
            playRound();
        })
    });
}

function playRound(){

    comp.currentChoice = getComputerChoice();
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
        return `Player: ${player.currentChoice}, CPU: ${comp.currentChoice}, Winner: ${winner}`;
    }

    function awardPoints(winner){
        switch(winner){
            case "Player":
                player.currentScore++;
                console.log(player.currentScore);
                playerScoreDisplay.textContent = `-${player.currentScore}`;
                break;
            case "CPU":
                comp.currentScore++;
                console.log(comp.currentScore);
                compScoreDisplay.textContent = `-${comp.currentScore}`;
                break;
            default:       
        }
    }

    function getComputerChoice(){
        /**************************************************
         * Returns "Rock", "Paper" or "Scissors" randomly
         **************************************************/
    
        comp.currentChoice = Math.floor(Math.random() * 3 + 1);
        switch(comp.currentChoice){
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
        if(player.currentChoice === comp.currentChoice){
            return "Tie";
        }
    
        if(player.currentChoice === "rock"){
            if(comp.currentChoice === "paper"){
                return "CPU";
            }
            if(comp.currentChoice === "scissors"){
                return "Player";
            }
        }
    
        if(player.currentChoice === "paper"){
            if(comp.currentChoice === "scissors"){
                return "CPU";
            }
            if(comp.currentChoice === "rock"){
                return "Player";
            }
        }
    
        if(player.currentChoice === "scissors"){
            if(comp.currentChoice === "rock"){
                return "CPU";
            }
            if(comp.currentChoice === "paper"){
                return "Player";
            }
        }

        return "duh";
    }
    /*
    function getWinner(){
        if(player.currentChoice === comp.currentChoice){
            return [0,"It's a tie."];
        }
    
        if(player.currentChoice === "rock"){
            if(comp.currentChoice === "paper"){
                return [-1,"You lost. Paper beats Rock."];
            }
            if(comp.currentChoice === "scissors"){
                return [1,"You won. Rock beats Scissors"];
            }
        }
    
        if(player.currentChoice === "paper"){
            if(comp.currentChoice === "scissors"){
                return [-1, "You lost. Scissors beat Paper"];
            }
            if(comp.currentChoice === "rock"){
                return [1, "You won. Paper beats Rock"];
            }
        }
    
        if(player.currentChoice === "scissors"){
            if(comp.currentChoice === "rock"){
                return [-1,"You lost. Rock beats Scissors"];
            }
            if(comp.currentChoice === "paper"){
                return [1, "You won. Scissors beat Paper"];
            }
        }
    }
    */
}

