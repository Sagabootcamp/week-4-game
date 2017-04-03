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









