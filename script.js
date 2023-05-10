function playRockPaperScissors(rounds = 5){

    for(let i = 0; i < rounds; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));     //plays a round and outputs results
    }

    function getPlayerChoice(){
        /**************************************************
         * Reads and returns player's choice via prompt
         **************************************************/

        return prompt("Choose Rock, Paper or Scissors.");
    }
    
    function getComputerChoice(){
        /**************************************************
         * Returns "Rock", "Paper" or "Scissors" randomly
         **************************************************/

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

    function playRound(player_one, player_two){
        /**************************************************
         *Compares the players' choices and decides a winner. 
         *Returns an array with a game result on index [0]  and game description on index [1], in reference to player_one
         *Results:
         *   player_one won  -  +1
         *   players tied    -   0
         *   player_one lost -   1
        ***************************************************/

        player_one = player_one.toLowerCase();
        player_two = player_two.toLowerCase();

        //console.log(`P1 ${player_one), P2 ${player_two}`); --for testing purposes

        if(player_one === player_two){
            return [0,"It's a tie."];
        }

        if(player_one === "rock"){
            if(player_two === "paper"){
                return [-1,"You lost. Paper beats Rock."];
            }
            if(player_two === "scissors"){
                return [1,"You won. Rock beats Scissors"];
            }
        }

        if(player_one === "paper"){
            if(player_two === "scissors"){
                return [-1, "You lost. Scissors beat Paper"];
            }
            if(player_two === "rock"){
                return [1, "You won. Paper beats Rock"];
            }
        }

        if(player_one === "scissors"){
            if(player_two === "rock"){
                return [-1,"You lost. Rock beats Scissors"];
            }
            if(player_two === "paper"){
                return [1, "You won. Scissors beat Paper"];
            }
        }
        
    }

}