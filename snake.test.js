import { Snake } from "./snake.js";

describe("initSnake", () => {
  let snake; // ← declared here so all tests can reach it

  beforeEach(() => {
    snake = new Snake("test", null, 20, 400); // ← initialized fresh before each test
    snake.initSnake();
  });

  test("body starts with exactly one segment", () => {
    expect(snake.body.length).toBe(1);
  });

  test("head starts at the center of the canvas", () => {
    expect(snake.body[0].x).toBe(200); // 400 / 2
    expect(snake.body[0].y).toBe(200); // 400 / 2
  });

  test("initial direction is down", () => {
    expect(snake.direction.x).toBe(0);
    expect(snake.direction.y).toBe(1);
  });
});

describe("changeDirection", () => {
  let snake; // ← declared here so all tests can reach it

  beforeEach(() => {
    snake = new Snake("test", null, 20, 400); // ← initialized fresh before each test
    snake.initSnake();
  });

  test("allows a valid 90 degree valid turn from down to right", () => {
    snake.changeDirection({ x: 1, y: 0 });

    expect(snake.direction.x).toBe(1);
    expect(snake.direction.y).toBe(0);
  });

  test("blocks direct reversal", () => {
    snake.changeDirection({ x: 0, y: -1 }); // try to reverse

    expect(snake.direction.x).toBe(0); // unchanged
    expect(snake.direction.y).toBe(1);
  });

  test("allows a turn form down to left", () => {
    snake.changeDirection({ x: -1, y: 0 }); // try to reverse

    expect(snake.direction.x).toBe(-1); // changed
    expect(snake.direction.y).toBe(0);
  });

  test("allows a turn from left to up", () => {
    snake.direction = { x: -1, y: 0 }; // manually set moving left

    snake.changeDirection({ x: 0, y: -1 });

    expect(snake.direction.x).toBe(0); // changed
    expect(snake.direction.y).toBe(-1);
  });

  test("allows a turn from up to right", () => {
    snake.direction = { x: 0, y: -1 }; // manually set moving left

    snake.changeDirection({ x: 1, y: 0 });

    expect(snake.direction.x).toBe(1); // changed
    expect(snake.direction.y).toBe(0);
  });

  test("same direction doesn't change anything", () => {
    snake.changeDirection({ x: 0, y: 1 }); // same direction

    expect(snake.direction.x).toBe(0); // unchanged
    expect(snake.direction.y).toBe(1);
  });
});

describe("update", () => {
  let snake; // ← declared here so all tests can reach it

  beforeEach(() => {
    snake = new Snake("test", null, 20, 400); // ← initialized fresh before each test
    snake.initSnake();
  });

  test("moves in initial direction correctly", () => {
    snake.update(false);

    expect(snake.body[0].x).toBe(200);
    expect(snake.body[0].y).toBe(220);
  });

  test("if ate then it removes tail correctly", () => {
    snake.update(true);

    expect(snake.body.length).toBe(2);
  });

  test("if didn't eat then don't increase the length of the snake", () => {
    snake.update(false);

    expect(snake.body.length).toBe(1);
  });

  test("moves correctly over multiple updates", () => {
    snake.update(false); // y: 220
    snake.update(false); // y: 240
    snake.update(false); // y: 260
    expect(snake.body[0].y).toBe(260);
  });

  test("snake grows correctly after multiple eaten apples", () => {
    snake.update(true); // length: 2
    snake.update(true); // length: 3
    snake.update(true); // length: 4
    expect(snake.body.length).toBe(4);
  });

  test("length stays stable after growing then not eating", () => {
    snake.update(true); // grows to 2
    snake.update(false); // should stay at 2
    snake.update(false); // should stay at 2
    expect(snake.body.length).toBe(2);
  });
});

describe("checkWalls", () => {
  let snake; // ← declared here so all tests can reach it

  beforeEach(() => {
    snake = new Snake("test", null, 20, 400); // ← initialized fresh before each test
    snake.initSnake();
  });

  test("is inside the canvas", () => {
    expect(snake.checkWalls()).toBe(false);
  });

  test("hits the top wall", () => {
    snake.body[0] = { x: 200, y: -1 };

    expect(snake.checkWalls()).toBe(true);
  });

  test("hits the right wall", () => {
    snake.body[0] = { x: 400, y: 200 };

    expect(snake.checkWalls()).toBe(true);
  });

  test("hits the left wall", () => {
    snake.body[0] = { x: -1, y: 200 };

    expect(snake.checkWalls()).toBe(true);
  });

  test("hits the botton wall", () => {
    snake.body[0] = { x: 200, y: 400 };

    expect(snake.checkWalls()).toBe(true);
  });
});
