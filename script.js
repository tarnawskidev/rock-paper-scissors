//main method here
game();
//create function computerPlay that randomly picks RPS
   function computerPlay(min, max) {
   let step1 = max - min + 1;
   let step2 = Math.random() * step1;
   let result = Math.floor(step2) + min;
   
   if (result == 1){
     return("rock");
   }
   if (result == 2){
     return("paper");
   }
   if (result == 3){
     return("scissors");
   }
}      
//function that takes playerSelection and computerSelection and decides winner
function playRound(playerSelection, computerSelection){
   playerSelection = playerSelection.toLowerCase();
   console.log(playerSelection);
   console.log(computerSelection);
   
   //if player select was rock
   if (playerSelection == "rock"){
     if (computerSelection == "rock"){
        return ("Tie game!");
     }
     else if (computerSelection == "paper"){
        return ("You lose!");
     }
     else if (computerSelection == "scissors"){
        return ("You win!");
     }
   }
   //if player select was paper
   else if (playerSelection == "paper"){
     if (computerSelection == "rock"){
        return ("You win!");
     }
     else if (computerSelection == "paper"){
        return ("Tie game!");
     }
     else if (computerSelection == "scissors"){
        return ("You lose!");
     }
   }
   //if player select was scissors
   else if (playerSelection == "scissors"){
     if (computerSelection == "rock"){
        return ("You lose!");
     }
     else if (computerSelection == "paper"){
        return ("You win!");
     }
     else if (computerSelection == "scissors"){
        return ("Tie game!");
     }
   }
   else {
     console.log("Invalid input");
   }
}      
//game() function here
function game() {
   let playerWins = 0;
   let computerWins = 0;
   let tieGames = 0;

   for (let i = 0; i < 5; i++) {
     let playerChoice = prompt("Please choose rock, paper, or scissors");
     gameResult = playRound(playerChoice, computerPlay(1,3));
     console.log(gameResult);
     if (gameResult == "You win!"){
        playerWins++;
     }
     if (gameResult == "You lose!"){
        computerWins++;
     }
     if (gameResult == "Tie game!"){
        tieGames++;
     }
   }
   console.log("Player:" + playerWins + " Computer:" + computerWins + " Ties:" + tieGames);
}