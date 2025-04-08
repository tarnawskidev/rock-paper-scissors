//store references to buttons in variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#result");
const playerTally = document.querySelector("#playerScore");
const computerTally = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

//attach event listeners to buttons
rock.addEventListener("click", function() {
    playRound("rock", computerPlay(1,3))
});
paper.addEventListener("click", function() {
    playRound("paper", computerPlay(1,3))
});
scissors.addEventListener("click", function() {
    playRound("scissors", computerPlay(1,3))
});

//main method here

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
        showResult("tie");
     }
     else if (computerSelection == "paper"){
        showResult("computer");
     }
     else if (computerSelection == "scissors"){
        showResult("player");
     }
   }
   //if player select was paper
   else if (playerSelection == "paper"){
     if (computerSelection == "rock"){
        showResult("player");
     }
     else if (computerSelection == "paper"){
        showResult("tie");
     }
     else if (computerSelection == "scissors"){
        showResult("computer");
     }
   }
   //if player select was scissors
   else if (playerSelection == "scissors"){
     if (computerSelection == "rock"){
        showResult("computer");
     }
     else if (computerSelection == "paper"){
        showResult("player");
     }
     else if (computerSelection == "scissors"){
        showResult("tie");
     }
   }
   else {
     console.log("Invalid input");
   }
}      

function showResult(result){

    if (result == "player") {
        results.textContent = "You win!";
        playerScore++;
        playerTally.textContent = playerScore;
    } else if (result == "computer") {
        results.textContent = "You lose!";
        computerScore++;
        computerTally.textContent = computerScore;
    } else {
        results.textContent = "Tie game!";
    }
    
}