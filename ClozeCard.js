var inquirer = require("inquirer");
var loop = 0;
var correct = 0;

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');

	if (!text.includes(cloze)) {
		console.log("ERROR! The cloze text does not appear in the full text. The full text should contain " + cloze);
		return;
	}
}

var pittStateCloze = new ClozeCard(
	"The Gorilla is the mascot for Pittsburg State University.", "Gorilla");
var kStateCloze = new ClozeCard(
	"The Wildcat is the K-State University mascot.", "chicken");

var getCards = function(loop) {
	if (loop === 0) {
		console.log(pittStateCloze.partial);
		inquirer.prompt({
			name: "pittStateClozeAnswer",
			message: "Answer: "
		}).then(function(answers) {
			if (answers.pittStateClozeAnswer === pittStateCloze.cloze) {
				console.log("Correct!\n" + pittStateCloze.text + "\n-----------------------------------------------------\n");
				loop++;
				correct++;
				getCards(loop);
			} else {
				console.log("Incorrect!\n" + pittStateCloze.text + "\n-----------------------------------------------------\n");
				loop++;
				getCards(loop);
			}
		})
	} else if (loop === 1) {
		console.log(kStateCloze.partial);
		inquirer.prompt({
			name: "kStateClozeAnswer",
			message: "Answer: "
		}).then(function(answers) {
			if (answers.kStateClozeAnswer === kStateCloze.cloze) {
				console.log("Correct!\n" + kStateCloze.text + "\n-----------------------------------------------------\n");
				loop++;
				correct++;
				getCards(loop);
			} else {
				console.log("Incorrect!\n" + kStateCloze.text + "\n-----------------------------------------------------\n");
				loop++;
				getCards(loop);
			}
		})
	} else if(loop === 2) {
		console.log("Game Over! You got " + correct + " correct!")
		inquirer.prompt({
			type: "list",
			name: "playAgain",
			message: "Do you want to play again?",
			choices: ["Yes", "No"]
		}).then(function(answers){
			if (answers.playAgain === "Yes") {
				loop = 0;
				correct = 0;
				getCards(loop);
			} else {
				console.log("Thanks for playing!");
			}
		})
	}
}

getCards(loop);

module.exports = ClozeCard;