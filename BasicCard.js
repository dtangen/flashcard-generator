var inquirer = require('inquirer');
var loop = 0;
var correct = 0;

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

var pittState = new BasicCard(
	"What is the Pittsburg State University mascot?", "Gorilla");
var kState = new BasicCard(
	"What is the K-State University mascot?", "Wildcat");

var getCards = function(loop){
	if (loop < 1) {
		console.log(pittState.front);
		inquirer.prompt({
		name: "pittStateAnswer",
		message: "Answer: "
	}).then(function(answers){
		if (answers.pittStateAnswer === pittState.back) {
			console.log("Correct!");
			loop++;
			correct++;
			getCards(loop);
		} else {
			console.log("Incorrect! The correct answer is Gorilla");
			loop++;
			getCards(loop);
		}
	})
	} else if (loop === 1) {
		console.log(kState.front);
		inquirer.prompt({
			name: "kStateAnswer",
			message: "Answer: "
		}).then(function(answers){
			if (answers.kStateAnswer === kState.back) {
				console.log("Correct!");
				loop++;
				correct++;
				getCards(loop);
			} else {
				console.log("Incorrect! The correct answer is Wildcat");
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

module.exports = BasicCard;