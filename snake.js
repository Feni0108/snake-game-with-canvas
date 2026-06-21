export class Snake {
  name;
  ctx;
  pixels;
  canvasWidth;
  startX;
  startY;

  constructor(name, ctx, pixels, canvasWidth) {
    this.name = name;
    this.ctx = ctx;
    this.pixels = pixels;
    this.canvasWidth = canvasWidth;
    this.startX = this.canvasWidth / 2;
    this.startY = this.canvasWidth / 2;
  }

  drawHeadDown() {
    this.ctx.fillStyle = "#ea4695ff";
    this.ctx.roundRect(
      this.startX,
      this.startY,
      this.pixels,
      this.pixels,
      [0, 0, 50, 50],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.25,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.25,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.25,
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
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.25,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.25,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.25,
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
    this.ctx.roundRect(
      this.startX,
      this.startY,
      this.pixels,
      this.pixels,
      [0, 50, 50, 0],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.96,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.96,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.96,
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
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.04,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.04,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.24,
      this.startY + this.pixels * 0.04,
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
    this.ctx.roundRect(
      this.startX,
      this.startY,
      this.pixels,
      this.pixels,
      [50, 0, 0, 50],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.96,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.96,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.96,
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
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.04,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.04,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.76,
      this.startY + this.pixels * 0.04,
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
    this.ctx.roundRect(
      this.startX,
      this.startY,
      this.pixels,
      this.pixels,
      [50, 50, 0, 0],
    );
    this.ctx.fill();

    // Bal szem
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.76,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.76,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Bal pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.0025,
      this.startY + this.pixels * 0.76,
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
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.76,
      this.pixels * 0.25,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb szemfeherje
    this.ctx.fillStyle = "#f4f4f4ff";
    this.ctx.beginPath();
    this.ctx.arc(
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.76,
      this.pixels * 0.18,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();

    // Jobb pupilla
    this.ctx.fillStyle = "#712121ff";
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.startX + this.pixels * 0.96,
      this.startY + this.pixels * 0.76,
      this.pixels * 0.08, // rx — keskeny
      this.pixels * 0.22, // ry — magas
      0,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }
}
