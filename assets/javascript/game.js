window.onload = function () {

	var catergories; //array of topics
	var chosenCategory; //selected category
	var getHint; //word getHint
	var word; //selected word
	var guess; //guess
	var guesses = []; //stored guesses
	var lives; //lives
	var counter; //count correct guesses
	var space; //number of spaces in word '-'

	//get elements
	var showLives = document.getElementById("myLives");
	var showCategory = document.getElementById("sCategory");
	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");

	//select category
	var selectCat = function () {
		if(chosenCategory === categories[0]) {
			categoryName.innerHTML = "The category is Horror Movies";
		} else if(chosenCategory === categories[1]) {
			categoryName.innerHTML = "The category is Horror Villians";
		} 
	}
//create guesses ul
	result = function() {
		wordHolder = document.getElementById('hold');
		correct = document.getElementById('ul');

		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
		if(word[i] === "-") {
			guess.innerHTML = "-";
			space = 1;
		}else {
			guess.innerHTML = "-";
		}

		guesses.push(guess);
		wordHolder.appendChild(correct);
		correct.appendChild(guess);
		}
	}

	//show lives
	comments = function() {
		showLives.innerHTML = "You have" + lives + "lives";
		if(lives <1) {
			showLives.innerHTML = "Game Over";
		}
		for(var i = 0; i < guesses.length; i++) {
			if(counter + space === guesses.length){
				showLives.innerHTML = "You win!";
			}
		}
	}

	//onClick function
	check = function() {
		list.onClick = function() {
			var guess = (this.innerHTML);
			this.setAttribute("class","active");
			this.onClick = null;
			for(var i = 0; i <word.length; i++) {
				if(word[i].innerHTML = guess){
					guesses[1].innerHTML = guess;
					counter += 1;
				}
			}
			var j = (word.indexOf(guess));
			if (j === -1) {
				lives -= 1;
				comments();
			} else {
				comments();
			}
		}
	}

	//play
	play=function(){
		categories=[
			["Scream", "Halloween", "Saw", "Nightmare on Elm Street", "The Last House on the Left", "I Know What You Did Last Summer", "Chuckie", "The Bride of Chuckie", "Alien", "The Purge", "Friday The 13th", "Zombeavers", "The Night of the Living Dead", "The Exorcist"];
			["Michael Myers", "Jason's Mother", "Jigsaw", "Chuckie", "Dracula", "Jack The Ripper", "Freddy Krueger", "Zombies"]
		];

	chosenCategory=categories[Math.floor(Math.random() * categories.length)];
	word=chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
	word=word.replace(/\s/g, "-");
	console.log(word);
	buttons();

	
	}

	var horror = horrorMovies[Math.floor(Math.random() * horrorMovies.length)];
	var guessesLeft = 13;
	var userGuesses =[];

	var wordHTML ="";

		for(var i=0; i < horror.length; i++){
			if (horror[i] == 'a') {
				wordHTML = wordHTML + "a";
			}else {
				wordHTML = wordHTML + " _ ";
		}

	document.querySelector('#game').innerHTML = wordHTML;

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keycode).toLowerCase();
		userGuesses.push(userGuess);
		doument.querySelector('#userGuesses').innerHTML = "User Guesses:" + userGuesses.join(', ');
		




	