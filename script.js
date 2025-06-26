const dino = document.getElementById ("dino");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score")
const highscoreDisplay = document.getElementById("highscore");
const startBtn = document.getElementById("starnutton");
const resetbutton = document.getElementById("resetbutton");

let score = 0;
let highscore = 0;
let gameRunning = false;
let positon = 0;
let velocity = 0;
let gravity = -0.6;
let jumping = false;
let obstacleSpeed = 5;
let obstaclespeed = 5;
let moveInterval = null;
let gameloopInterval = null;

function startGame(){
     score = 0;
     velocity = 0;
     positon = 0;
     obstacleleft = 600;
     obstacleSpeed = 5;
     gameRunning = ture;
     jumping = faluse;
     
     dino.style.bottom = positon + "px";
     
     startbutton.style.display = "none";
     resetbutton.style.display = "inline";

     gameloop();

}



function jumping(){
    if(!jumping && gameRunning){
        velocity = 12;
        jumping = ture;
    }
}

document.addEventListener("keydown", e =>{
     if (e.code ==="space" || e.code ==="arrowUp"){
          jumping();
     }
});

startbutton.addEventListener("click", stratGame);
resetbutton.addEventListener("click", ()=>{
     startBtn.style.display = "inline";
     resetbutton.style.display = "none";
});