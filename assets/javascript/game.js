var hangmanGame = {
	wordsList: {
		"scream": {
			picture: 'scream.gif',
			alt: 'Giphy of the 1997 film Scream'
		},
		"halloween": {
			picture: 'halloween.gif',
			alt: 'Giphy of the 1978 film Halloween'
		},
		"saw": {
			picture: 'saw.gif',
			alt: 'Giphy of the 2004 film Saw'
		},
		"chucky": {
			picture: 'chuckie.gif',
			alt: "Giphy of the main character from the 1988 film Child's Play"
		},
		"alien": {
			picture: 'alien.gif',
			alt: "Giphy of the 1978 film Alien"
		},
		"zombeavers": {
			picture: 'zombeavers.gif',
			alt: "Giphy of the 2014 film Zombeavers"
		}
	},
	wordInPlay: null,
	lettersInChosenWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,
	losses: 0,
	numGuesses: 13,
	startGame: function(){
		// pick a random word
		var objKeys = Object.keys(this.wordsList);
		this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)]; 

		this.lettersInChosenWord = this.wordInPlay.split("");

		this.rebuildWordView();
		this.processUpdateTotalGuesses();
	},
	updatePage: function(letter) {
		if (this.guessesLeft === 0){
			this.updateLosses();
		}else{
			this.updateGuesses(letter);

			this.updateMatchedLetters(letter);

			this.rebuildWordView();

			if(this.updateWins() == true){
				this.restartGame();
			}
		}
	},
	updateGuesses: function(letter){
		//if the letter isn't in the guessedLetters array and the letter is not in the lettersOfTheWord array then make guesses go down

		if((this.guessedLetters.indexOf(letter) == -1) && (this.lettersInChosenWord.indexOf(letter) == -1)){
			this.guessedLetters.push(letter);

			this.guessesLeft--;

			$('#guessesLeft').html(this.guessesLeft);
			$('#wrongGuesses').html(this.guessedLetters.join(', '));
		} 
	},
	processUpdateTotalGuesses: function(){
		this.totalGuesses = this.lettersInChosenWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		$('#guessesLeft').html(this.guessesLeft);
	},
	updateMatchedLetters: function(letter){
		for(var i = 0; i < this.lettersInChosenWord.length; i++){
			if((letter === this.lettersInChosenWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
				this.guessesLeft--;
				$('#guessesLeft').html(this.guessesLeft);
			};
		};
	},
	rebuildWordView: function(){
		var wordView = "";

		for(var i=0; i < this.lettersInChosenWord.length; i++){
			if(this.matchedLetters.indexOf(this.lettersInChosenWord[i]) != -1){
				wordView += this.lettersInChosenWord[i];
			} else{
				wordView += '&nbsp;_&nbsp;';
			}
		}

		$('#wordblanks').html(wordView);
	},
	restartGame: function(){
		$('#wrongGuesses').html('');
		this.wordInPlay = null;
		this.lettersInChosenWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.startGame();
		this.rebuildWordView();
	},
	updateWins: function(){
		if(this.matchedLetters.length == 0){
			var win = false;
		} else{
			var win = true;
		}

		for(var i=0; i < this.lettersInChosenWord.length; i++){
			if(this.matchedLetters.indexOf(this.lettersInChosenWord[i]) == -1){
				win = false;
			}
		}

		if(win == true){
			this.wins = this.wins +1;

			$("#winCounter").html(this.wins);

			$('#winLossAlertBox').show();
			setTimeout(function(){
				$('#winLossAlertBox').hide();
			}, 5000);

			playWord = this.wordInPlay;
			$('#winLossMessage').html('WINNER! The correct movie is ' + playWord + '.');
			$('#giphySpace').html('<img class="movieImage img-responsive" src="assets/images/' + this.wordsList[this.wordInPlay].picture + '" alt="' + this.wordsList[this.wordInPlay].alt + '">');

			return true;
		} else{
			return false;
		}
	},
	updateLosses: function(){
		this.losses = this.losses +1; 

		$('#winLossAlertBox').show();
		setTimeout(function(){
			$('#winLossAlertBox').hide();
		}, 5000);

		$('#winLossMessage').html("You lost! The correct word is " + this.wordInPlay + ".");
		$('#giphySpace').html("<img class='movieImage img-responsive' src='http://i.giphy.com/kjiOhgLVcie88.gif' alt='Ghostface from Scream shaking head No'>");

		$('#lossCounter').html(this.losses);

		this.restartGame();
	}
};

hangmanGame.startGame();

document.onkeyup = function(event){
	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	hangmanGame.updatePage(hangmanGame.letterGuessed);
};

