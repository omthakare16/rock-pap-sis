function getComputerChoice() {
  var items = ["rock", "paper", "scissors"];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 2;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return 1;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return 0;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return 0;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return 1;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return 1;
  } else if (computerSelection == "scissors" && playerSelection === "paper") {
    return 0;
  } else {
    return "nothing";
  }
}
const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     let comp = getComputerChoice();
//     let playerSelection = button.innerText;
//     game(playerSelection);

//   });
// });

let k = 0;
const content = document.querySelector("div");

var com = 0;
var playr = 0;
const status = document.createElement("div");
const result = document.createElement("div");
const score = document.getElementById("demo4");
const val = document.getElementById("demo3");
// score.classList.add("scr");
result.classList.add("rslt");
status.classList.add("stat");
val.textContent = "(Ready)" + " " + "(Ready)";
score.textContent = com + " " + playr;
// content.insertBefore(score, buttons[0]);
// content.appendChild(score);

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let playerSelection = button.className;
    let computerSelection = getComputerChoice();
    val.textContent = "(" + computerSelection + ") (" + playerSelection + ")";
    if (playr == 5 || com == 5) {
      result.textContent = "";
      k = 0;
      com = 0;
      playr = 0;
      score.textContent = com + " " + playr;
    }
    k = k + 1;

    if (playRound(playerSelection, computerSelection) == 1) {
      playr = playr + 1;
      status.textContent = "=>";
      status.style.color = "green";
      content.appendChild(status);
    } else if (playRound(playerSelection, computerSelection) == 2) {
      status.textContent = "tie";
      status.style.color = "white";
      content.appendChild(status);
    } else {
      com = com + 1;
      status.textContent = "<=";
      status.style.color = "red";
      content.appendChild(status);
    }
    score.textContent = com + " " + playr;
    // content.insertBefore(score, buttons[0]);
    // content.appendChild(score);

    console.log(com, playr);
    if (playr == 5 || com == 5) {
      if (playr == com) {
        // console.log("it's a tie game");
        result.textContent = "It's a tie game";
        result.style.color = "black";
      } else if (playr > com) {
        // console.log("you WIN");
        result.textContent = "you Win";
        result.style.color = "green";
      } else {
        // console.log("you lose better luck next time");
        result.textContent = "you Lose";
        result.style.color = "red";
      }
      content.appendChild(result);
    }
  });
});

const rstbutn = document.getElementById("rst");
rstbutn.addEventListener("click", reset);

function reset() {
  com = 0;
  playr = 0;
  k = 0;
  score.textContent = com + " " + playr;
  result.textContent = "";
  val.textContent = "";
  val.textContent = "(Ready)" + " " + "(Ready)";
  status.style.color = "white";
  status.textContent = "== ";
}
// for (let i = 0; i < 5; i++) {
//   let computerSelection = getComputerChoice();
//   if (playRound(playerSelection, computerSelection) == 1) {
//     playr = playr + 1;
//   } else if (playRound(playerSelection, computerSelection) == 2) {
//     status.textContent = "Tie";
//     content.appendChild(status);
//   } else {
//     com = com + 1;
//   }
//   console.log(playr, com);
// }
