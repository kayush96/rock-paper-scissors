const choices = ["rock", "paper", "scissors"];
//Computer Play function
function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomChoice];
  return computerChoice;
}

//Game function to play 5 times
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++) {
    const playerInput = prompt("Enter Your choice: Rock, Paper or Scissors?");
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    function playRound(playerChoice, computerChoice) {
      if(playerChoice==="rock" && computerChoice === "rock" 
      || playerChoice === "paper" && computerChoice === "paper" 
      || playerChoice === "scissors" && computerChoice === "scissors") {
         
      } else if(playerChoice==="rock" && computerChoice === "paper") {
         computerScore++; 
      } else if(playerChoice==="rock" && computerChoice === "scissors") {
        playerScore++;
      } else if(playerChoice==="paper" && computerChoice === "rock") {
        playerScore++;
      } else if(playerChoice==="paper" && computerChoice === "scissors") {
        computerScore++;
      } else if(playerChoice==="scissors" && computerChoice === "rock") {
        computerScore++;
      } else if(playerChoice==="scissors" && computerChoice === "paper") {
        playerScore++;
      }
    }
  }
  if(playerScore === computerScore) {
    return "It's a Draw";
  } else if(playerScore > computerScore){
    return "You Won";
  } else {
    return "Computer Won";
  }
}
