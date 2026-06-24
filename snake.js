export class Snake {
  name;
  ctx;
  pixels;
  canvasWidth;
  direction;
  body;

  constructor(name, ctx, pixels, canvasWidth) {
    this.name = name;
    this.ctx = ctx;
    this.pixels = pixels;
    this.canvasWidth = canvasWidth;
  }

  // Drawing on canvas all bodyparts
  drawHeadDown() {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.roundRect(
      this.body[0].x,
      this.body[0].y,
      this.pixels,
      this.pixels,
      [0, 0, 50, 50],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.08, // rx — keskeny
      this.pixels * 0.22, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szem
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.25,
      this.pixels * 0.08, // rx — keskeny
      this.pixels * 0.22, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }

  drawHeadRight() {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.roundRect(
      this.body[0].x,
      this.body[0].y,
      this.pixels,
      this.pixels,
      [0, 50, 50, 0],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.22, // rx — keskeny
      this.pixels * 0.08, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szem
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.24,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.22, // rx — keskeny
      this.pixels * 0.08, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }

  drawHeadLeft() {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.roundRect(
      this.body[0].x,
      this.body[0].y,
      this.pixels,
      this.pixels,
      [50, 0, 0, 50],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.96,
      this.pixels * 0.22, // rx — keskeny
      this.pixels * 0.08, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szem
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.76,
      this.body[0].y + this.pixels * 0.04,
      this.pixels * 0.22, // rx — keskeny
      this.pixels * 0.08, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }

  drawHeadUp() {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.roundRect(
      this.body[0].x,
      this.body[0].y,
      this.pixels,
      this.pixels,
      [50, 50, 0, 0],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.0025,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.08, // rx — keskeny
      this.pixels * 0.22, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szem
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.body[0].x + this.pixels * 0.96,
      this.body[0].y + this.pixels * 0.76,
      this.pixels * 0.08, // rx — keskeny
      this.pixels * 0.22, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }

  drawHead() {
    if (this.direction.x == 1) {
      this.drawHeadRight();
    } else if (this.direction.x == -1) {
      this.drawHeadLeft();
    } else if (this.direction.y == 1) {
      this.drawHeadDown();
    } else if (this.direction.y == -1) {
      this.drawHeadUp();
    }
  }

  drawBodyPart(segment) {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.beginPath();
    this.ctx.roundRect(segment.x, segment.y, this.pixels, this.pixels);
    this.ctx.fill();
  }

  drawSnake() {
    this.body.forEach((segment, index) => {
      if (index === 0) {
        this.drawHead(); // first element → head
      } else {
        this.drawBodyPart(segment); // everything else → body
      }
    });
  }

  // -----** Logic **-----

  initSnake() {
    this.body = [
      { x: this.canvasWidth / 2, y: this.canvasWidth / 2 }, // head
    ];
    this.direction = { x: 1, y: 0 }; // moving down initially
  }

  changeDirection(newDirection) {
    if (
      newDirection.x + this.direction.x == 0 ||
      newDirection.y + this.direction.y == 0
    ) {
      return;
    } else {
      this.direction.x = newDirection.x;
      this.direction.y = newDirection.y;
    }
  }

  update(ate) {
    // 1. Calculate new head position
    const newHead = {
      x: this.body[0].x + this.direction.x * this.pixels,
      y: this.body[0].y + this.direction.y * this.pixels,
    };

    // 2. Add new head to front
    this.body.unshift(newHead);

    // 3. Remove tail (for now always — eating logic comes later)
    if (!ate) {
      this.body.pop();
    }
  }

  checkWalls() {
    const head = this.body[0];
    return (
      head.x < 0 ||
      head.x >= this.canvasWidth ||
      head.y < 0 ||
      head.y >= this.canvasWidth
    );
  }

  checkItself() {
    const head = this.body[0];
    return this.body.some((segment, index) => {
      if (index !== 0) {
        return head.x === segment.x && head.y === segment.y;
      }
    });
  }
}
