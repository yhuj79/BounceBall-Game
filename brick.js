var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

setInterval(draw, 7)
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 3;
var dy = 3;
var ballRadius = 10;

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

var score = 0;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'tomato';
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
            gameMsg.innerHTML = "GAME OVER<br>Score : " + score;
            gameMsg.classList.add(SHOW);
            
        }
    }

    if (leftPressed && paddleX > 0) {
        paddleX -= 10;
    } else if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 10;
    }

    x += dx;
    y += dy;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth)
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath;
}

function drawScore() {
    ctx.font = '30px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText('Score : ' + score, 8, 30);
}