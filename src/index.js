import Ball from './Ball.js'
import Background from './Background.js'
import Lives from './Lives.js'
import Paddle from './Paddle.js'
import Bricks from './Bricks.js'
import Score from './Score.js'

export const canvas = document.getElementById('myCanvas');
export const ctx = canvas.getContext('2d');

const hue = Math.random() * 360;

const background = new Background()

const bricks = new Bricks()

const ball = new Ball()

const paddle = new Paddle()

const score = new Score()

const lives = new Lives()

let rightPressed = false;

let leftPressed = false;

function collisonDetection() {
  for (let c = 0; c < bricks.brickColumnCount; c += 1) {
    for (let r = 0; r < bricks.brickRowCount; r += 1) {
      const b =bricks.bricks[c][r];
      if (b.status === true) {
        if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.height) {
          ball.dy = -ball.dy;
          b.status = false;
          score.update(1);
          if (score.score === bricks.brickRowCount * bricks.brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            score.reset();
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.render(ctx);
  bricks.render(ctx);
  ball.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  collisonDetection();

  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) { 
    ball.dx = -ball.dx;
    ball.color = `hsl(${hue}, 100%, 50%)`;
  }
  if (ball.y + ball.dy < ball.radius) { //If the ball hits the top, reverse the ball
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) { //if the ball hits the bottom of the screen
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else { 
      lives.loseLife();
      if (! lives.lives) {
        alert('GAME OVER');
        lives.reset();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x;
      }
    }
  }
  if (rightPressed) {
    paddle.x += 7;
    if (paddle.x + paddle.width > canvas.width) {
      paddle.x = canvas.width - paddle.width;
    }
  } else if (leftPressed) {
    paddle.x -= 7;
    if (paddle.x < 0) {
      paddle.x = 0;
    }
  }

  ball.move()
  requestAnimationFrame(draw);
}
draw();

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);



