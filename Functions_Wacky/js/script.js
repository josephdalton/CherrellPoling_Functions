//Cherrell Poling 9/25/13 Functions Wacky

// a function with two arithmetic operators && 3 parameters

//How many diapers are remaining after taking your child
// to daycare for a week. They require you take at least 7 
// diapers a day, and there are 130 diapers that come in a pack. 

var usage = calcAmount(7, 5, 130); //These are the values for the amount of diapers you have to take to daycare each week, the amount of days he goes, and the initial amount of diapers in the box.

function calcAmount(diapers, days, initialAmount){ // this is the function as well as the parameters that are storing the information.
	
	var remaining = initialAmount - diapers * days; // this is the variable that's going to calculate the problem.
	return remaining; // whatever the answer is is going to return back to the usage variable.
}

console.log ("You have " + usage + " diapers left"); // this is going to print out by the console with the answer to the question. 

