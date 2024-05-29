
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerchoice = document.getElementById("playerchoice");
const computerchoice = document.getElementById("computerchoice");

let gamestatus = document.getElementById("status");

let playerscore = document.getElementById("playerscore");
let pscore = Number(playerscore.textContent);

let computerscore = document.getElementById("computerscore");
let cscore = Number(computerscore.textContent);
const gameArray = ["rock", "paper", "scissors"]

let clickCounter = 0;

rock.addEventListener("click", event => {
    
    playerchoice.textContent = "";
    computerchoice.textContent = "";
    
    playerchoice.textContent += `PLAYER: ${gameArray[0]}`;  
    const cpu = Math.floor(Math.random() * gameArray.length);
    computerchoice.textContent += ` COMPUTER: ${gameArray[cpu]}`;

    gameLogic("rock", gameArray[cpu]);
    
})

paper.addEventListener("click", event => {
    playerchoice.textContent = "";
    computerchoice.textContent = "";
    
    playerchoice.textContent += `PLAYER: ${gameArray[1]}`;  
    const cpu = Math.floor(Math.random() * gameArray.length);
    computerchoice.textContent += ` COMPUTER: ${gameArray[cpu]}`;

    gameLogic("paper", gameArray[cpu]);
})

scissors.addEventListener("click", event => {
    playerchoice.textContent = "";
    computerchoice.textContent = "";
    
    playerchoice.textContent += `PLAYER: ${gameArray[2]}`;  
    const cpu = Math.floor(Math.random() * gameArray.length);
    computerchoice.textContent += ` COMPUTER: ${gameArray[cpu]}`;

    gameLogic("scissors", gameArray[cpu]);
})


function gameLogic(playerinput, cpuinput){
    console.log(playerinput);
    console.log(cpuinput);
    if((playerinput === "rock" && cpuinput === "paper") || (playerinput === "paper" && cpuinput === "scissors") || (playerinput === "scissors" && cpuinput === "rock")){
        cscore++;
        computerscore.textContent = `${cscore}`;
        gamestatus.textContent = "CPU WINS!";
    }
    else if((playerinput === "rock" && cpuinput === "scissors") || (playerinput === "paper" && cpuinput === "rock") || (playerinput === "scissors" && cpuinput === "paper")){
        pscore++;
        playerscore.textContent = `${pscore}`;
        gamestatus.textContent = "YOU WIN!";
    }
    else{
        gamestatus.textContent = "IT'S A TIE!";
    }
    
}



