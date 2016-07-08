"use strict";

var computer = {
	name: 'computer',
	score: 0,
	pick: ''
}

var player = {
	name: 'player',
	score: 0,
	pick: ''
}

var round = 0;

function newGame() {

	// Reset
	computer.score = 0;
	computer.pick = "";
	player.score = 0;
	player.pick = '';
	round = 0;

	player.name = prompt("Witaj, jak Ci na imię?", "Default Player Name");
	document.getElementById('playerName').innerHTML = player.name;

	const buttons = document.getElementsByClassName("pick-button");
	const buttonsLength = buttons.length;

	for(var i = 0; i < buttonsLength; i++) {
		buttons[i].style.visibility = 'visible';
	}

}

function playerPick(pick) {
  player.pick = pick;
  computerPick(); //choose computer's pick
  checkRoundResult(); //check result
}

function computerPick() {
  //random number between 0 and 3
  switch (Math.floor(Math.random()*3)) {
    case 0:
    computer.pick = "rock";
    break;
    case 1:
    computer.pick = "paper";
    break;
    case 2:
    computer.pick = "scissors";
    break;
  }
}

function checkRoundResult() {
  var gameResult;
	if (player.pick === computer.pick) {
	  gameResult = "tie!"
	} else if (player.pick === "rock") { //if player chooses rock
	  if (computer.pick === "scissors") { player.score++; gameResult = "Player wins!" } 
	  else if (computer.pick === "paper") { computer.score++; gameResult = "Computer wins!" }
	} else if (player.pick === "paper") { //if player chooses paper
	  if  (computer.pick === "rock") { player.score++; gameResult = "Player wins!" }
	  else if (computer.pick === "scissors") { computer.score++; gameResult = "Computer wins!" }
	} else { //if player chooses scissors
	  if  (computer.pick === "paper") { player.score++; gameResult = "Player wins!" }
	  else if (computer.pick === "rock") { computer.score++; gameResult = "Computer wins!" }
	}

	displayRoundResult(gameResult);
	return ( (player.score >= 10) || (computer.score >=10) ) && checkGameResult();
}

function displayRoundResult(gameResult) {
	document.getElementById("computerPick").innerHTML = computer.pick
	document.getElementById("playerPick").innerHTML = player.pick
	document.getElementById("gameResult").innerHTML = gameResult;
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("computerScore").innerHTML = computer.score;
}

function checkGameResult() {
	  //log the result
		document.getElementById('roundResult').innerHTML = (player.score > computer.score) ?
			`Congratulation ${player.name}, you win the game! :)` : `Computer wins the game! :(`;

		//hide buttons
		const buttons = document.getElementsByClassName("pick-button");
		const buttonsLength = buttons.length;
		for(var i = 0; i < buttonsLength; i++) {
			buttons[i].style.visibility = 'hidden';
		}
}
