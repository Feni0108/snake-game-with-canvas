import { Snake } from "./snake.js";

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
