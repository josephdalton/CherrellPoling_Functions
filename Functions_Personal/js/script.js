// Cherrell Poling Function Personal 9/24/2013

//Personal Function

//If you are driving over 75mph on the interstate you will get a Speeding Ticket. 



var calcTicket = function(l, a){ // this is an anonymous function because it has no name. Contains the arguments. 

	var ticket = l >= a; // the expression for this is that actual speed has to be less then the speed limit. 
	return ticket; // this is the return, it will have the answer to the problem reported back to the variable

}// this is important because it closes in the block of function. 
var result = calcTicket(75, 90); // this the location of the arguments the actual speed, and the speed limit for the function to pull from. 

 (result) ? console.log("Smooth cruising! This is a safe speed to travel.") : console.log("Be careful! You are going too fast and you may get a speeding ticket.");
// the result of the function will determine what the console log will print out. 

