import { Snake } from "./snake.js";
import { Apple } from "./apple.js";

const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("gameCanvas")
);
const ctx = canvas.getContext("2d");

const pixels = canvas.width / 10; // size of each cell in pixels

// --- Game State ---
// Hint: think of the snake as an array of {x, y} objects
let snake = [];
let food = {};

let jon = new Snake("Jon", ctx, pixels, canvas.width);
let mouse = new Apple(ctx, pixels, canvas.width);

// --- Functions to implement ---

function init() {
  // Set up the initial snake position and place the first food
  jon.initSnake();
  mouse.initPos();
}

function checkIfTheSnakeAte() {
  return jon.body[0].x === mouse.posX && jon.body[0].y === mouse.posY;
}

function gameLoop() {
  if (jon.checkWalls()) {
    clearInterval(gameInterval);
    console.log("GAME OVER");
    return; // stop executing the rest of gameLoop
  }

  drawBackground();

  const didTheSnakeAte = checkIfTheSnakeAte();

  mouse.drawApple();
  jon.update(didTheSnakeAte);
  jon.drawSnake();

  if (didTheSnakeAte) {
    mouse.initPos();
    mouse.drawApple();
  }
}

function drawBackground() {
  for (let row = 0; row < canvas.height / pixels; row++) {
    for (let col = 0; col < canvas.width / pixels; col++) {
      // minden második cella más színű
      if ((row + col) % 2 === 0) {
        ctx.fillStyle = "#d4cbc6ff";
      } else {
        ctx.fillStyle = "#a4b386ff";
      }
      ctx.fillRect(col * pixels, row * pixels, pixels, pixels);
    }
  }
}

// --- Controls ---
document.addEventListener("keydown", (e) => {
  // Change direction based on arrow keys
  // Hint: prevent the snake from reversing direction!
  console.log("key pressed:", e.key);
  if (e.key === "ArrowRight") jon.changeDirection({ x: 1, y: 0 });
  if (e.key === "ArrowLeft") jon.changeDirection({ x: -1, y: 0 });
  if (e.key === "ArrowUp") jon.changeDirection({ x: 0, y: -1 });
  if (e.key === "ArrowDown") jon.changeDirection({ x: 0, y: 1 });
});

// --- Start ---
init();
const gameInterval = setInterval(gameLoop, 500);
