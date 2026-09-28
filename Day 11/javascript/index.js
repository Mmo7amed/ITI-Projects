// Avtivity 1
// var myName = "Mohamed";
// var age = 21;
// console.log(`Name: ${myName} age: ${age}`);

// age += 5;
// console.log(`Name: ${myName} age: ${age}`);

// var isStudent = true;
// console.log(`Name: ${myName} age: ${age} studentStatus: ${isStudent}`);

//  Activity 2

// var num = 0;

// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// Task 1 day(11)

var playerOneChoice = "Rock";
var playerTwoChoice = "Scissors";

switch (true){
    case (playerOneChoice === playerTwoChoice):
        console.log("Tie!");
        break
        
    case (playerOneChoice === "Rock" && playerTwoChoice === "Scissors"):
        console.log("player 1 wins!");
        break;

    case (playerOneChoice === "Paper" && playerTwoChoice === "Rock"):
        console.log("player 1 wins!");
        break;

    case (playerOneChoice === "Scissors" && playerTwoChoice === "Paper"):
        console.log("player 1 wins!");
        break;

    case (playerOneChoice === "Rock" && playerTwoChoice === "Paper"):
        console.log("player 2 wins!");
        break;

    case (playerOneChoice === "Paper" && playerTwoChoice === "Scissors"):
        console.log("player 2 wins!");
        break;

    case (playerOneChoice === "Scissors" && playerTwoChoice === "Rock"):
        console.log("player 2 wins!");
        break;
    
    default: 
        console.log("Invalid Choice!");
}

// Task 2 day(11)

var grade = 92;

if(grade >= 90){
    console.log("Excellent");
}else if(grade >= 80){
    console.log("Good");   
}else if(grade >= 70){
    console.log("Average");
}else if(grade >= 60){
    console.log("Pass");
}else if(grade < 60){
    console.log("Fail");
}else{
    console.log("Invalid input.");
}

    