// Cherrell Poling 9/25/13 Functions Industry

// going to use else if && at least one logical operator && Named Functions

//Question: Can I start a new account?

//if your credit score is over 600, and you have at least $200 downpayment you can activate a new account. 

var phone = function newActivation(creditScore, downPayment){ // this line contains the function as well as the parameters for it which are the value of the creditscore and the downpayemnt.

if (creditScore === 600 && downPayment === 200){ // the conditional that the credit score has to be 600 and the downpayment has to be 200
	console.log("You meet the requirements to activate a new phone with us today.");// if met, this will print to the console


}else{
	console.log("I'm sorry, you do not qualify for an activation at this time.") // if not met this will print to the console

}

};

phone(800, 200) // these are the arguements, values, of the parameters listed at the beginning. 




