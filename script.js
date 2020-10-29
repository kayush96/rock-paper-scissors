function computerPlay() {
  let randMove = ["rock", "paper", "scissors"];
  let random = randMove[Math.floor(Math.random(randMove) * 3)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "It's a Draw!";
  } else if(playerSelection === "rock" && computerSelection === "paper") {
    return "Computer Wins";
  } else if(playerSelection === "rock" && computerSelection === "scissors"){
    return "Player Wins";
  } else if(playerSelection === "paper" && computerSelection === "rock") {
    return "Player Wind";
  } else if(playerSelection === "paper" && computerSelection === "scissors") {
    return "Compter Wins";
  } else if(playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer Wins";
  } else if(playerSelection === "scissors" && computerSelection === "paper") {
    return "Player Wins";
  }
}

let inputUser = prompt("Enter Your choice: ");
let playerSelection = inputUser.toLowerCase();
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
