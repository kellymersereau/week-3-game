	var listOfAnimals = ["giraffe", "cat", "dog", "monkey"];

	// 1. we choose a word that the uder has to guess from a list

	var animal = listOfAnimals[Math.floor(Math.random() * listOfAnimals.length)];

	// 2. we build a view

	var wordHTML ="";

	for(var i=0; i < animal.length; i++){
			wordHTML = wordHTML + " _ ";
	}

	document.querySelector('#game').innerHTML = wordHTML;


	// 3. we let the user guess a letter from the keyboard
	// 	if the letter is in the word then
	// 	we rebuild the view
	// 4. if the user guesses all the letters then the user wins