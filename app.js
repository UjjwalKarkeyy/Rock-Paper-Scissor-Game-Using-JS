let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const showWinner = (userWin)=>{
    if(userWin)
    {
        console.log('You Win!');
    }

    else
    {
        console.log('You Lose!');
    }
}

const drawGame = ()=>{
    console.log('Game was draw.');
    
}

const genComputerChoice = ()=>{
    const choices = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);

    return choices[randomIndx];
}

const playGame = (userChoice)=>{

    console.log("User choosed = ",userChoice);

    // Generating computer choice
    const compChoice = genComputerChoice();
    console.log("Computer choosed = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }

    else
    {
        let userWin = true;

        if(userChoice === 'rock')
        {
            userWin = compChoice === 'paper' ? false: true;
        }

        else if(userChoice === 'paper')
        {
            userWin = compChoice === 'scissors' ? false: true;
        }

        else
        {
            userWin = compChoice === 'rock' ? false: true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click", ()=>{

        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
})});