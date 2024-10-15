  
    let humanScore = 0;
    let computerScore = 0;
function playRound(computerChoice, humanChoice){
    
        if(computerChoice == "rock"){
            if(humanChoice == "scissor"){
                console.log("Rock beats scissors. You lose");
                computerScore++;
            }
            else if(humanChoice == "paper"){
                console.log("Paper beats rock. You win!");
                humanScore++;
            }
            else{
                console.log("Tie");
            }
        }

        if(computerChoice == "scissor"){
            if(humanChoice == "rock"){
                console.log("Rock beats scissors. You win");
                humanScore++;
            }
            else if(humanChoice == "paper"){
                console.log("Scissor beats paper. You lose!");
                computerScore++;
            }
            else{
                console.log("Tie");
            }
        }


        if(computerChoice == "paper"){
            if(humanChoice == "rock"){
                console.log("Paper beats rock. You lose!");
                computerScore++;
            }
            else if(humanChoice == "scissor"){
                console.log("Scissor beats paper. You win!");
                humanScore++;
            }
            else{
                console.log("Tie");
            }
        }
}

function playGame(){
  
    for(i=1;i<=5;i++){
        console.log(`Round ${i}`);

        function getComputerChoice(){
            let randomChoice = Math.random();
            let computerChoice;
        
            if(randomChoice >=0 && randomChoice <= 0.3){
                computerChoice = "rock"; 
                console.log(`Computer choice is ${computerChoice}`);   
                return computerChoice;
            }
            if(randomChoice >0.3 && randomChoice <= 0.6){
                computerChoice = "paper";  
                console.log(`Computer choice is ${computerChoice}`);  
                return computerChoice;
            }
            else{
                computerChoice = "scissor";
                console.log(`Computer choice is ${computerChoice}`);    
                return computerChoice;
        }
            
        }
        
        
        function getHumanChoice(){
        
            let humanChoice = prompt("Enter your Choice");
            console.log(`Your choice is ${humanChoice}`);
            return humanChoice;
        }
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(computerSelection, humanSelection);
        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    if(humanScore > computerScore){
        console.log("You are the winner!!!!");
    }
    else{
        console.log("Computer wins!!!!!");
    }
}

playGame();






