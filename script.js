function getComputerChoice() {
  var items = ["rock", "paper", "scissors"];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 2;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return 1;
  } else if ((computerSelection = "rock" && playerSelection == "scissors")) {
    return 0;
  } else if ((computerSelection = "paper" && playerSelection == "rock")) {
    return 0;
  } else if ((computerSelection = "paper" && playerSelection == "scissors")) {
    return 1;
  }else if ((computerSelection = "scissors" && playerSelection == "rock")) {
    return 1;
  }else if ((computerSelection = "scissors" && playerSelection == "paper")) {
    return 0;
  }
}

function game() {
  var com = 0;
  var playr = 0;
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your sign?");
    let computerSelection = getComputerChoice();
    if(playRound(playerSelection,computerSelection)==1){
      playr=playr+1;
    }
    else if(playRound(playerSelection,computerSelection)==2){
      console.log("tie")
    }
    else{
      com=com+1;
    }
    console.log(playr,com)
  }
  if(playr==com){
    console.log("it's a tie game")
  }
  else if(playr>com){
    console.log("you WIN")

  }
  else{
    console.log("you lose better luck next time")
  }

}


game();

