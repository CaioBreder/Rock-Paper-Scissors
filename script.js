let gameRounds = prompt("How many rounds do you want to play?");

var loses = 0; 
var wins = 0;
var ties = 0;

    
for(let i = 0; i < gameRounds; i++){
    let computerChoice
    const userChoice = prompt("Please choose r, p, or s.");
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    if (randomNumber === 1) {
        computerChoice = "r"
    }
    if(randomNumber === 2){
        computerChoice = "p"
    }
    if(randomNumber === 3){
        computerChoice = "s"
    }
    if(userChoice !== "r" && userChoice !== "p" && userChoice !== "s"){
       alert("You didn't enter a valid option");
       continue
    }
    if(userChoice === computerChoice) {
        alert("It's a tie!"); 
        ties++; 
    }
    if(userChoice === "r" && computerChoice === "s"){
        alert("You win!"); 
        wins++;
    }
    if(userChoice === "r" && computerChoice === "p"){
        alert("You lost.");
        loses++; 
    }
    if(userChoice === "s" && computerChoice === "r"){
        alert("You win!"); 
        wins++;
    }
    if(userChoice === "s" && computerChoice === "p"){
        alert("You lost."); 
        loses++;
    }
    if(userChoice === "p" && computerChoice === "r"){
        alert("You win!"); 
        wins++;
    }
    if(userChoice === "p" && computerChoice === "s"){
        alert("You lost."); 
        loses++;
    }

    console.log(userChoice);
    console.log(randomNumber);
}

alert("You lost: " + loses + "You won:" + wins + "You tied:" + ties);

