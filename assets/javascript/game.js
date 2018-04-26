function checkLetterInWord(letter, word, wordArray){
	var result = {
		wordArray: [],
		letterNumber: -1,
	};

	for (var letterNumber = word.indexOf(letter); letterNumber >= 0; letterNumber = word.indexOf(letter, letterNumber + 1)){
    		wordArray[letterNumber] = letter;
    		result.wordArray = wordArray;
    		result.letterNumber = letterNumber;
    	}
    return result;
};

function getRandomIntInclusive(min, max) {
        	min = Math.ceil(min);
        	max = Math.floor(max);
        	return Math.floor(Math.random() * (max - min + 1)) + min;
};


function initializeGame(){
	targetWord = dictionary[getRandomIntInclusive(0, (dictionary.length - 1))];
	

	targetWordArray = [];

	guessedLettersArray = [];
	guessedLetters.textContent = guessedLettersArray;
	

	winGame = false;

	for (i = 0; i < targetWord.length; i++){
				targetWordArray.push(" _ ")
			}
	targetWordArrayPrint.textContent = targetWordArray.join("");
	tracker = 7;
	trackerPrint.textContent = tracker;

};

function isInArray(targetArray, newElement){
	for(i = 0; i < targetArray.length; i++){
		if (targetArray[i] === newElement){
			return true;
		}

		else if (i == (targetArray.length - 1)){
			return false;
		}
	}
};

function pushAndPrintString(string1, array1, htmlElementVariable){		
	array1.push(string1);
	htmlElementVariable.textContent = array1;
};

 function resizeBg() {
				
	if ( (window.innerWidth / window.innerHeight) < aspectRatio ) {
	    wallpaper.removeAttribute("class");
	    wallpaper.className += "bgheight z-index-neg1";
	} 

	else {
	    wallpaper.removeAttribute("class");
	    wallpaper.className += "bgwidth z-index-neg1";
	}
				
};