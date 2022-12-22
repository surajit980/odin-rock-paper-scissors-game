/*
Project: Rock Paper Scissors
*/
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

function getUserChoice(){
    let choice=prompt("Enter your Choice","rock / paper / scissor");
    return choice;
}

function startGame() {
    // let userChoice=getUserChoice();
    // let computerChoice=getComputerChoice();

    // if (userChoice === computerChoice) {
    //     console.log("its tie "+userChoice+" "+computerChoice);
    //     startGame();
    // }

    // if(userChoice === "rock"){
    //     if (computerChoice === "scissor") {
    //         console.log("You won "+userChoice+" beats "+computerChoice);
    //     }else{
    //         console.log("You lose "+computerChoice+" beats "+userChoice);
    //     }
    // }else if (userChoice === "paper") {
    //     if (computerChoice === "rock") {
    //         console.log("You won "+userChoice+" beats "+computerChoice);
    //     }else{
    //         console.log("You lose "+computerChoice+" beats "+userChoice);
    //     }
    // }else if (userChoice === "scissor") {
    //     if (computerChoice === "paper") {
    //         console.log("You won "+userChoice+" beats "+computerChoice);
    //     }else{
    //         console.log("You lose "+computerChoice+" beats "+userChoice);
    //     }
    // }else{
    //     console.log("wrong choice please enter as write in input")
    //     startGame();
    // }
    let userScore=0;
    let computerScore=0;
    let round=1;
    while (round<=5) {
        let userChoice=getUserChoice();
        let computerChoice=getComputerChoice();
        
        if (userChoice === computerChoice) {
            console.log("its a tie you both choose "+computerChoice);
            continue;
        }else if (userChoice === "rock") {
            if (computerChoice === "scissor") {
                userScore++;
                console.log("You won round "+round+" "+userChoice+" beats "+computerChoice);
            }else{
                computerScore++;
                console.log("You lose round "+round+" "+computerChoice+" beats "+userChoice);
            }
        }else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                userScore++;
                console.log("You won round "+round+" "+userChoice+" beats "+computerChoice);
            }else{
                computerScore++;
                console.log("You lose round "+round+" "+computerChoice+" beats "+userChoice);
            }
        }else if (userChoice === "scissor") {
            if (computerChoice === "paper") {
                userScore++;
                console.log("You won round "+round+" "+userChoice+" beats "+computerChoice);
            }else{
                computerScore++;
                console.log("You lose round "+round+" "+computerChoice+" beats "+userChoice);
            }
        }else{
            console.log("wrong choice please enter as write in input")
            continue;
        }
        round++;
    }
    if (userScore>computerScore) {
        console.log("userwon");
    } else {
        console.log("computerwon");
    }
}
startGame();