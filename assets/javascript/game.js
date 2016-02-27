// Global Variables (accessible by all functions))
// =========================================================

// Array of Word Options (all lowercase)
var wordsList = ["scream", "halloween", "saw", "chuckie", "alien",  "zombeavers"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var chosenWord = "";//selected word to guess - solution
var lettersInChosenWord = []; //this will break the solution into individual letters to be stored in array
var numBlanks = 0; //This will be the number of blanks we show based on the solution
var blanksAndSuccesses = []; // Holds a mix of blank and solved letters (ex: 'n, _ _, n, _') 
var wrongGuesses =[]; //holds all of the wrong guesses

//Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 13;

//functions
function startGame(){
	numGuesses = 13;

	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
	lettersInChosenWord = chosenWord.split(""); 
	numBlanks = lettersInChosenWord.length; 

	console.log(chosenWord);

	blanksAndSuccesses = []; 
	wrongGuesses = []; 


	for(var i=0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses); 
	document.getElementById("guessesLeft").innerHTML = numGuesses;


	document.getElementById('wordblanks').innerHTML = blanksAndSuccesses.join(" ");


	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");

}


function checkLetters(letter) {

	var letterInWord = false; 
	for (var i=0; i<numBlanks; i++) {
		if (chosenWord[i] == letter) {
			letterInWord = true; 
		};
	}


	if (letterInWord) {

		for(var i=0; i<numBlanks; i++){

			if(chosenWord[i] == letter){
				blanksAndSuccesses[i] = letter; 
			}
		}
	console.log(blanksAndSuccesses); 

	}

	else {
		wrongGuesses.push(letter); 
		numGuesses--; 
	}
}


function roundComplete() {


	console.log("WinCount: " +winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


	document.getElementById("guessesLeft").innerHTML=numGuesses;
	document.getElementById("wordblanks").innerHTML=blanksAndSuccesses.join(" "); 
	document.getElementById("wrongGuesses").innerHTML=wrongGuesses.join(" ");


	if(lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++; 
		alert("You win!"); 


		document.getElementById("winCounter").innerHTML=winCounter;
		startGame(); 
	}


	else if(numGuesses == 0){
		lossCounter++; 
		alert("You lose :("); 

	
		document.getElementById("lossCounter").innerHTML=lossCounter;
		startGame(); 
	}
}


startGame();


document.onkeyup = function(event){
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	checkLetters(letterGuessed); 
	roundComplete(); 
}

