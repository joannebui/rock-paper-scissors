function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    //takes one from the list randomly as the computer choice.
    var randomizer = Math.floor(Math.random()*choices.length);
    var computerChoice = choices[randomizer]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    //turns both choices into lowercase to make it easier.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //if statement crux of the game.
    if (playerSelection == computerSelection) {
        result = "It's a tie!";
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        result = "You win! Paper beats Rock";
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        result = "You lose! Scissors beats Paper";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        result = "You lose! Rock beats Scissors";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        result = "You win! Scissors beats Paper";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        result = "You lose! Paper beats Rock";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        result = "You win! Rock beats Scissors";    
    }
    return result;
}

function game(){
    //best of 5, player and computer starts at 0
    player = 0
    computer = 0
    var subW = "You win";
    var subL = "You lose";

    for (let i = 0; i < 5; i++) {
        var computerSelection = getComputerChoice();
        //wanna make buttons for playerSelection but this will do for now.
        let playerSelection = window.prompt("Select rock, paper, or scissors:");
        var result = playRound(playerSelection, computerSelection);
        //if the result had the substring 'you win' the player gets a point. else computer gets a point.
        if (result.includes(subW)){
            player++;
        }
        else if(result.includes(subL)){
            computer++;
        }

    }
    return player, computer
    

}


