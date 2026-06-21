import { Snake } from "./snake.js";
import { Apple } from "./apple.js";

const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("gameCanvas")
);
const ctx = canvas.getContext("2d");

const pixels = canvas.width / 10; // size of each cell in pixels

let jon = new Snake("Jon", ctx, pixels, canvas.width);
let mouse = new Apple(ctx, pixels, canvas.width);

// --- Game State ---
// Hint: think of the snake as an array of {x, y} objects
let snake = [];
let food = {};
let direction = { x: 1, y: 0 }; // moving right initially

// --- Functions to implement ---

function init() {
  // Set up the initial snake position and place the first food
  drawBackground();
  jon.drawHeadLeft();
  mouse.initPos();
  console.log("posX:" + mouse.posX);
  mouse.drawApple();
  console.log("posX:" + mouse.posX);
}

function update() {
  // 1. Calculate the new head position using direction
  // 2. Check for collisions (walls, self)
  // 3. Check if the snake ate the food
  // 4. Add new head to the front of the snake array
  // 5. Remove the tail (unless food was eaten)
}

function draw() {
  // 1. Clear the canvas
  // 2. Draw the snake (loop through its segments)
  // 3. Draw the food
}

function gameLoop() {
  update();
  draw();
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
});

// --- Start ---
init();
setInterval(gameLoop, 150); // runs ~6-7 times per second
