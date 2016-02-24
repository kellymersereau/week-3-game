 	// <div class="container">
 	//  	<h2 id="categoryName"></h2>
 	// 	<p id="myLives">Guesses Left: <br> 13 </p>
 	// 	<button id="reset">Play again</button>
 	// </div>

 	// <div id="game"></div>
window.onload = function () {

var listMovies = ["Scream", "Halloween", "Saw", "Nightmare on Elm Street", "The Last House on the Left", "I Know What You Did Last Summer", "Chuckie", "The Bride of Chuckie", "Alien", "The Purge", "Friday The 13th", "Zombeavers", "The Night of the Living Dead", "The Exorcist"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var word ;//selected word to guess
var guess; //user guesses
var guesses; //stored guesses
var lives ;//amount of lives
var counter ;//count correct guesses
var space ;// number of spaces in word

// elements in html
var showLives = document.getElementById("myLives"); 




//creates alphabet ul
var buttons = function() {
	myButtons = document.getElementById('buttons');
	letters = document.createElement('ul');

	for(var i=0; i < alphabet.length; i++){
		letters.id ='alphabet';
		list=document.createElement('li');
		list.id='letter';
		list.innerHTML=alphabet[i];
		check();
		myButtons.appendChild(letters);
		letters.appendChild(list);
	}
}



//create guesses ul
result = function() {
	wordHolder=document.getElementById('hold');
	correct = document.createElement('ul');

	for(var i=0; i<word.length; i++){
		correct.setAttribute('id', 'my-word');
		guess = document.createElement('li');
		guess.setAttribute('class', 'guess');

		if(word[i] === "-") {
		guess.innerHTML = "-";
		space =1;
		} else {
		guess.innerHTML = "_";
		}

		guesses.push(guess);
		word.Holder.appendChild(correct);
		correct.appendChild(guess);
	}
}

//show lives
comments=function() {
	showLives.innerHTML = "You have " + lives + "guesses left.";
	if(lives<1) {
		showLives.innerHTML="Game Over";
	}
	for(var i=0; i<guesses.length; i++) {
		if(counter + space === guesses.length) {
			showLives.innerHTML = "You Win!";
		}
	}
}

// onclick function
check = function () {
	list.onClick = function () {
		var guess = (this.innerHTML);
		this.setAttribute("class", "active");
		this.onClick = null;
		for(var i = 0; i < word.length; i++){
			if(word[i] === guess) {
				guesses[i].innerHTML = guess;
				counter += 1;
			}
		}
		var j = (word.indexOf(guess));
			if(j === -1) {
			lives -= 1;
			comments();
			} else {
			comments();
		}
	}
}

//play
play = function() {
	word = listMovies[Math.floor(Math.random() * listMovies.length)];
	word = word.replace(/\s/g, "-");
	console.log(word);
	buttons();

	guesses = [];
	lives = 13;
	counter = 0;
	space = 0;
	comments();

//build a view
var wordHTML = "";

for(var i=0; i < word.length; i++){
	wordHTML = wordHTML + " _ ";
	}

document.querySelector('#hold').innerHTML=wordHTML;
}
play();




}