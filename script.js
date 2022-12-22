let userScore=0;
let round=5
let computerScore=0;


function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "paper";
    }
    else{
        return "scissor";
    }
    
}

function startGame(userChoice) {
    let computerChoice=getComputerChoice();

    if(userChoice === "rock"){
        if (computerChoice === "scissor") {
            userScore++;
            document.getElementById("userscore-p").innerHTML=userScore;
            document.getElementById("result-text").innerHTML="You won Rock beats Scissor";
        }else{
            computerScore++;
            document.getElementById("computerscore-p").innerHTML=computerScore;
            document.getElementById("result-text").innerHTML="You lose Rock cannot beats Paper";
        }
    }else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            userScore++;
            document.getElementById("userscore-p").innerHTML=userScore;
            document.getElementById("result-text").innerHTML="You won Paper beats Rock";
        }else{
            computerScore++;
            document.getElementById("computerscore-p").innerHTML=computerScore;
            document.getElementById("result-text").innerHTML="You lose Paper cannot beats Scissor";
        }
    }else if (userChoice === "scissor") {
        if (computerChoice === "paper") {
            userScore++;
            document.getElementById("userscore-p").innerHTML=userScore;
            document.getElementById("result-text").innerHTML="You won Scissor beats Paper";
        }else{
            computerScore++;
            document.getElementById("computerscore-p").innerHTML=computerScore;
            document.getElementById("result-text").innerHTML="You lose Scissor cannot beats Rock";
        }
    }
}
