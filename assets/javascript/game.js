//Math.floor(Math.random() * ((y-x)+1) + x);
//Pseudocode
//page load guess number randomly displayed. 19-120
//4 random numbers for the crystals. 1-12
//on click on cyrstals number adds to the score box.
//if the score equals to guess number win!!
// else you loose!
//new game comes automatically.
// and win or looose counter increments.

// function  random guess number
// function  random numbers for crystals 
//     by dynamically creating the button and
//		 assaining the value.
// function adding up the score 

window.onload = function() {

	numberGuessGame.reset();
	$("#crystal1").click(numberGuessGame.crystal1);
	//console.log(numberGuessGame.rCNumber1);
	$("#crystal2").click(numberGuessGame.crystal2);
	//console.log(numberGuessGame.rCNumber2);
	$("#crystal3").click(numberGuessGame.crystal3);
	//console.log(numberGuessGame.rCNumber3);
	$("#crystal4").click(numberGuessGame.crystal4);
	//console.log(numberGuessGame.rCNumber4);
};

var score = 0;

var numberGuessGame = {

	rGNumber : 0,

	rCNumber1 : 0,

	rCNumber2 : 0,

	rCNumber3 : 0,

	rCNumber4 : 0,

	wCounter: 0,

	lCounter: 0,
	
	reset: function() {

		numberGuessGame.rGNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
		score = 0;
		numberGuessGame.rCNumber1 = Math.floor(Math.random() * ((12-1)+1) + 1);
		numberGuessGame.rCNumber2 = Math.floor(Math.random() * ((12-1)+1) + 1);
		numberGuessGame.rCNumber3 = Math.floor(Math.random() * ((12-1)+1) + 1);
		numberGuessGame.rCNumber4 = Math.floor(Math.random() * ((12-1)+1) + 1);
		console.log(numberGuessGame.rCNumber1);
		console.log(numberGuessGame.rCNumber2);
		console.log(numberGuessGame.rCNumber3);
		console.log(numberGuessGame.rCNumber4);

		$("#guess-num").html(numberGuessGame.rGNumber);
		$("#total-score").html("");

	},

	gamechecker: function(score) {

		if(score === numberGuessGame.rGNumber){
			numberGuessGame.wCounter++;
			//$("#message").html("You win!");
			$("#wins").html(numberGuessGame.wCounter);
			numberGuessGame.reset();
		}

		else if(score >= numberGuessGame.rGNumber){
			numberGuessGame.lCounter++;
		//	$("#message").html("Sorry you loose!");
			$("#losses").html(numberGuessGame.lCounter);
			numberGuessGame.reset();
		}
	},

	/*crystalValue: function(rCNumber) {
		score += rCNumber;
		$("#total-score").html(score);
		numberGuessGame.gamechecker();

	}*/

	crystal1: function(){
		//numberGuessGame.rCNumber1 = Math.floor(Math.random() * ((12-1)+1) + 1);
		score += numberGuessGame.rCNumber1;
		$("#total-score").html(score);
		numberGuessGame.gamechecker(score);

	},

	crystal2: function(){
		score += numberGuessGame.rCNumber2;
		$("#total-score").html(score);
		numberGuessGame.gamechecker(score);
	},

	crystal3: function(){
		score += numberGuessGame.rCNumber3;
		$("#total-score").html(score);
		numberGuessGame.gamechecker(score);
	},

	crystal4: function(){
		score += numberGuessGame.rCNumber4;
		$("#total-score").html(score);
		numberGuessGame.gamechecker(score);
	}

}





















/*window.onload = function() {

randomGuessNumber();

$("#guess-num").append(guessNumber);

randomCrystalNumbers();

crystalValueGenerator();

crystalGenerator();

$(".crystal-image").on("click", crystalGame); 

};


var guessNumber = 0; 
var crystalsNumbers = [];
var crystalSelection = [];
var i = 0;

var win = 0;
var loss = 0;
var counter = 0;

// generating a random guess number.
function randomGuessNumber(){
	guessNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
	console.log(guessNumber);
	
}

// generating unique random crystal values.

function randomCrystalNumbers(){
	while(crystalsNumbers.length < 12){

		var randomNum = Math.floor(Math.random() * ((12-1)+1) + 1);

		if(crystalsNumbers.indexOf(randomNum) > -1){
			continue;
		}
		crystalsNumbers.push(randomNum);
	}

	console.log(crystalsNumbers);

}
// giving random numbers to the crystals
function crystalValueGenerator(){

	for(var i=0; i < 4; i++){

		crystalSelection.push(crystalsNumbers[i]);
	}

	console.log(crystalSelection);
}

// creating image and assigning values 
function crystalGenerator() {

	for(var i= 0; i < crystalSelection.length; i++){

		var imageCrystal = $("<img>");
   
	    imageCrystal.addClass("crystal-image");

	    imageCrystal.attr("src", "assets/images/daisy.jpg");
	   
	    imageCrystal.attr("crystalvalue",crystalSelection[i]);
	    
	    $("#crystaldiv").append(imageCrystal);


	}

}
// game logic
function crystalGame(){

	var crystalValue = ($(this).attr("crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total-score").html(counter);
    
    if(counter === guessNumber) {
    	win++;
    	$("#wins").append(win);
    	return;
	}
        
    else if(counter >= guessNumber) {
    	loss++;
    	$("#looses").append(loss);	
    	return;
    }	
 
    
}







/*
randomGuessNumber();
	    $("#guess-num").html(guessNumber);
	    crystalValueGenerator();
	    $("#total-score").html("");

*/




// generating unique random crystal values.
/*
function randomCrystalNumbers(){
	while(crystalsNumbers.length < 12){

		var randomNum = Math.floor(Math.random() * ((12-1)+1) + 1);

		if(crystalsNumbers.indexOf(randomNum) > -1){
			continue;
		}
		crystalsNumbers.push(randomNum);
	}

	console.log(crystalsNumbers);
		
}*/



// assigning value to each crystal
/*function crystalGenerator(){
	var i = 0;
	for(i=0; i < 4; i++){

		crystalSelection.push(crystalsNumbers[i]);
		console.log(crystalSelection[i]);

		$("<img>").addClass("crystals");
		$("<img>").attr("src", "purple.jpg");
		$("<img>").attr("width","50");
		$("<img>").attr("height","50");
		$("<img>").attr("crystal-val", crystalSelection[i]);

		$("#crystaldiv").append($("<img>"));
	}

	console.log(crystalSelection);
}*/


/*	var i = 0;
	for(i=0; i < crystalSelection.length; i++){

		$("<img>").addClass("crystals");
		$("<img>").attr("src", "purple.jpg");
	//	$("<img>").attr("width","50");
	//	$("<img>").attr("height","50");
		$("<img>").attr("crystal-val", crystalSelection[i]);

		$("#crystaldiv").append($("<img>"));
	}

	console.log(crystalSelection);
*/




/*$(".crystals").on("click", function() {
	

var crystalValue = ($(this).attr("crystal-val"));
crystalValue = parseInt(crystalValue);
console.log(crystalValue);







});*/









