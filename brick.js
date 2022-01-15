var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height - 38;
var dx = 5;
var dy = 5;
var ballRadius = 16;

var score = 0;
var ballcolor = 'firebrick';
var paddlecolor = 'royalblue'
var paddleWidth = 100;
var paddleHeight = 20;
var paddleX = (canvas.width - paddleWidth) / 2;
var leftPressed = false;
var rightPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

const gameMsg = document.querySelector('.game_msg');
const SHOW = 'show';

const firstGame = document.querySelector('.firstGame');
const infoGame = document.querySelector('.infoGame');
firstGame.addEventListener('click', firstStart);

function firstStart(){
    setInterval(draw, 5)
    firstGame.style.display = "none";
    infoGame.style.display = "none";
}

const restartGame = document.querySelector('.restartGame');
restartGame.addEventListener('click', reStart);

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
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballcolor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();

    if (x > canvas.width - ballRadius || x < ballRadius) {
        dx = -dx;
        score++;
    } else if (y < ballRadius) {
        dy = -dy;
        score++;
    } else if (y > canvas.height - ballRadius - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else if (y > canvas.height) {
            gameMsg.innerHTML = "GAME OVER<br>SCORE : " + score;
            gameMsg.classList.add(SHOW);
            dx = 0; dy = 0;
            restartGame.innerHTML = 'RELOAD';
            restartGame.classList.add(SHOW);
        }
    }

    setInterval(function(){
        ballRadius = 10;
    }, 15000);

    setInterval(function(){
        paddlecolor = 'darkblue';
    }, 25000);

    setInterval(function(){
        paddleWidth = 50;
    }, 30000);

    setInterval(function(){
        ballcolor = 'purple';
    }, 55000);
    setInterval(function(){
        ballcolor = '#eee';
    }, 60000);

    if (leftPressed && paddleX > 0) {
        paddleX -= 5;
    } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    }

    x += dx;
    y += dy;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth)
    ctx.fillStyle = paddlecolor;
    ctx.fill();
    ctx.closePath;
}

function drawScore() {
    ctx.font = 'bold 30px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText('SCORE : ' + score, 8, 35);
}