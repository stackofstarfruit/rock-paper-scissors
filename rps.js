function computerPlay() {
    var randInt = Math.floor(Math.random() * 2);
    if(randInt == 0) {
        return "rock";
    } else if(randInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    window.alert("You played " + playerSelection);
    window.alert("Computer played " + computerSelection);
    if(playerSelection === computerSelection) {
        window.alert("It's a tie!");
        return "tie";
    } else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            window.alert("You lost!");
            return "loss";
        } else {
            window.alert("You won!");
            return "win";
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            window.alert("You lost!");
            return "loss";
        } else {
            window.alert("You won!");
            return "win";
        }
    } else {
        if(computerSelection === "scissors") {
            window.alert("You lost!");
            return "loss";
        } else {
            window.alert("You won!");
            return "win";
        }
    }
}

function prompter() {
    var choice = "";
    while(choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = window.prompt("Choose rock, paper, or scissors.");
        if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
            return choice;
        } else {
            window.alert("That is not a valid option. Please try again.");
        }
    }
}

function game() {
    window.alert("WELCOME TO ROCK PAPER SCISSORS!");
    var numWins = 0;
    var numLosses = 0;
    var numTies = 0;
    for(i = 0; i < 5; i++) {
        const playerSelection = prompter();
        const computerSelection = computerPlay();
        var result = playRound(playerSelection, computerSelection);
        if(result === "win") {
            numWins++;
        } else if(result === "loss") {
            numLosses++;
        } else {
            numTies++;
        }
        window.alert("You have " + numWins + " wins, " + numTies + " ties, and " + numLosses + " losses.");
    }
    window.alert("FINAL RESULT: " + numWins + " wins, " + numTies + " ties, and " + numLosses + " losses.");
}

game();