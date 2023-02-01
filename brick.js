var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 38;
var dx = 4;
var dy = 4;
var ballRadius = 16;
var score = 0;
var ballColor = "firebrick";
var paddleColor = "royalblue";
var paddleWidth = 200;
var paddleHeight = 20;
var paddleX = (canvas.width - paddleWidth) * 2;
var leftPressed = false;
var rightPressed = false;
var scoreColor = "#000";

var hitAudio1 = new Audio("./sound/hitSound.mp3");
var hitAudio2 = new Audio("./sound/hitSound.mp3");
var endAudio = new Audio("./sound/endSound.mp3");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

const gameMsg = document.querySelector(".game_msg");
const SHOW = "show";

const firstGame = document.querySelector(".firstGame");
const infoGame = document.querySelector(".infoGame");
firstGame.addEventListener("click", firstStart);
function firstStart() {
  setInterval(draw, 5);
  firstGame.style.display = "none";
  infoGame.style.display = "none";
}

const restartGame = document.querySelector(".restartGame");
restartGame.addEventListener("click", reStart);
function reStart() {
  document.location.reload();
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 50 && relativeX < canvas.width - 50) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
  ctx.fillStyle = paddleColor;
  ctx.fill();
  ctx.closePath;
}

function drawScore() {
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = scoreColor;
  ctx.fillText("SCORE : " + score, 8, 35);
}

function randomNum(min, max) {
  var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNum;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();

  if (x > canvas.width - ballRadius || x + 10 < ballRadius) {
    let num = randomNum(0, 3);
    dx = -dx;
    dx + num;
    score++;
    hitAudio1.play();
  } else if (y > canvas.width - ballRadius || y + 10 < ballRadius) {
    let num = randomNum(0, 3);
    dy = -dy;
    dy + num;
    score++;
    hitAudio2.play();
  } else if (y > canvas.height - ballRadius - paddleHeight) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      let num = randomNum(0, 3);
      dy = -dy;
      dy + num;
      hitAudio2.play();
    } else if (y > canvas.height) {
      hitAudio1 = new Audio("./sound/null.mp3");
      hitAudio2 = new Audio("./sound/null.mp3");
      endAudio.play();
      gameMsg.innerHTML = "GAME OVER<br>SCORE : " + score;
      gameMsg.classList.add(SHOW);
      dx = 0;
      dy = 0;
      scoreColor = "#EEE";
      endAudio = new Audio("./sound/null.mp3");
      canvas.width = 0;
      restartGame.innerHTML = "RELOAD";
      restartGame.classList.add(SHOW);
    }
  }

  if (leftPressed && paddleX > 0) {
    paddleX -= 6;
  } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 6;
  }

  x += dx;
  y += dy;

  //game pattern

  setInterval(function () {
    ballRadius = 12;
  }, 30000);
  setInterval(function () {
    paddleColor = "darkblue";
  }, 55000);
  setInterval(function () {
    paddleWidth = 80;
  }, 60000);
  setInterval(function () {
    ballColor = "purple";
  }, 95000);
  setInterval(function () {
    ballColor = "#eee";
  }, 100000);
  setInterval(function () {
    ballColor = "#eee";
  }, 100100);
  setInterval(function () {
    ballColor = "#eee";
  }, 100200);
  setInterval(function () {
    ballColor = "#eee";
  }, 100300);
  setInterval(function () {
    ballColor = "#eee";
  }, 100400);
  setInterval(function () {
    ballColor = "#eee";
  }, 100500);
  setInterval(function () {
    ballColor = "#eee";
  }, 100600);
  setInterval(function () {
    ballColor = "#eee";
  }, 100700);
  setInterval(function () {
    ballColor = "purple";
  }, 100800);
  setInterval(function () {
    ballColor = "#eee";
  }, 100900);
  setInterval(function () {
    ballcolor = "#eee";
  }, 101000);
  setInterval(function () {
    ballColor = "#eee";
  }, 101100);
  setInterval(function () {
    ballcolor = "#eee";
  }, 101200);
  setInterval(function () {
    ballColor = "#eee";
  }, 101300);
  setInterval(function () {
    ballcolor = "#eee";
  }, 101400);
  setInterval(function () {
    ballColor = "#eee";
  }, 101500);
  setInterval(function () {
    ballcolor = "#eee";
  }, 101600);
  setInterval(function () {
    ballColor = "purple";
  }, 101700);
  setInterval(function () {
    ballRadius = 8;
  }, 160000);
  setInterval(function () {
    ballRadius = 8;
  }, 160100);
  setInterval(function () {
    ballRadius = 8;
  }, 160200);
  setInterval(function () {
    paddleWidth = 40;
  }, 220000);
  setInterval(function () {
    paddleWidth = 40;
  }, 220100);
  setInterval(function () {
    paddleWidth = 40;
  }, 220200);
  setInterval(function () {
    paddleWidth = 40;
  }, 220300);
  setInterval(function () {
    paddleWidth = 40;
  }, 220400);
  setInterval(function () {
    paddleWidth = 40;
  }, 220500);
  setInterval(function () {
    paddleWidth = 40;
  }, 220600);
  setInterval(function () {
    paddleWidth = 40;
  }, 220700);
  setInterval(function () {
    paddleWidth = 40;
  }, 220800);
  setInterval(function () {
    paddleWidth = 40;
  }, 220900);
  setInterval(function () {
    paddleWidth = 40;
  }, 221000);
  setInterval(function () {
    paddleWidth = 40;
  }, 221100);
}
