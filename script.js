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
let obstacleSpeed = 5;
let moveInterval = null;
let gameloopInterval = null;
