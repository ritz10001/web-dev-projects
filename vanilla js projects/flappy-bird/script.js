
//board related
let canvas;
let context;
const canvasWidth = 360;
const canvasHeight = 640;

//bird related
const birdWidth = 34;
const birdHeight = 24;

let birdX = canvasWidth/8;
let birdY = canvasHeight/2;

let pipes = [];
const pipeWidth = 64;
const pipeHeight = 512;
const pipeGap = 100;

let pipeX = canvasWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

let velocityX = -2; //moving left, so negative velocity
let velocityY = 0; //bird y velocity
let resistance = 0.4;

let gameOver = false;
let score = 0;
let highestScore = 0;
let temp;


let birdObj = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}


window.onload = function(){
    canvas = document.getElementById("gameCanvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext('2d');

    //bird image
    birdImg = new Image();
    birdImg.src = "./flappybird.png"
    birdImg.onload = function(){
        context.drawImage(birdImg, birdObj.x, birdObj.y, birdObj.width, birdObj.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);

    setInterval(placePipes, 1500);

    document.addEventListener("keydown", (event) => {
        
        if(gameOver && event.code === "Space"){  
            birdObj.y = birdY;
            pipes = [];
            score = 0;
            gameOver = false;
            requestAnimationFrame(update);
        }
        if(!gameOver && event.code == "Space"){
            velocityY = -6;
        }
    } )
    
    
    
}

function update(){
    if(gameOver){
        return;
    }
    requestAnimationFrame(update);
    context.clearRect(0, 0, canvas.width, canvas.height);

    //redrawing the bird
    velocityY += resistance;
    if((birdObj.y + velocityY > 0)){
        birdObj.y += velocityY;
    }

    context.drawImage(birdImg, birdObj.x, birdObj.y, birdObj.width, birdObj.height);

    if(birdObj.y >= canvas.height){
        gameOver = true;
    }

    //redrawing individual pipes from scratch at every new frame
    pipes.forEach(pipe => {
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(pipe.top == true && pipe.passed === false && birdObj.x > pipe.x + pipe.width){
            pipe.passed = true;
            score++;
        }

        if(collisionDetection(birdObj, pipe)){
            gameOver = true;
        }
    })

    while(pipes.length > 0 && (pipes[0].x + pipes[0].width) < 0){
        pipes.shift();
    }

    //score
    context.fillStyle = "blue";
    context.font = "30px Arial";
    context.fillText(`Score: ${score}`, 5, 45);
    context.fillStyle = "red";
    context.fillText(`Highest Score: ${highestScore}`, 5, 90);

    if(gameOver){
        if(score > highestScore){
            highestScore = score;
        }
        context.fillText("GAME OVER!", canvas.width/10, canvas.height/2);
    }

}

function placePipes(){

    if(gameOver){
        return;
    }

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);

    let topPipe = {
        top: true,
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipes.push(topPipe);
    console.log(topPipe.y);

    let bottomPipe = {
        top: false,
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + pipeGap,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipes.push(bottomPipe);
}

function collisionDetection(b, p){
    if((b.x < p.x + p.width) && (b.x + b.width > p.x) && (b.y < p.y + p.height) && (b.y + b.height > p.y)){
        return true;
    }
    else{
        return false;
    }
}

