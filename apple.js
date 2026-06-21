export class Apple {
  ctx;
  pixels;
  posX;
  posY;

  constructor(ctx, pixels, canvasWidth) {
    this.ctx = ctx;
    this.pixels = pixels;
    this.canvasWidth = canvasWidth;
  }

  initPos() {
    const colsAndRows = this.canvasWidth / this.pixels;
    this.posX = Math.floor(Math.random() * colsAndRows) * this.pixels;
    this.posY = Math.floor(Math.random() * colsAndRows) * this.pixels;
  }

  drawApple() {
    const centerX = this.posX + this.pixels / 2;
    const centerY = this.posY + this.pixels / 2;

    // Piros kör (az alma teste)
    this.ctx.fillStyle = "#6bed6eff";
    this.ctx.beginPath();
    this.ctx.roundRect(
      this.posX + this.pixels * 0.1,
      this.posY + this.pixels * 0.1,
      this.pixels - this.pixels * 0.2,
      this.pixels - this.pixels * 0.2,
      [40],
    );
    this.ctx.fill();

    // Szár
    this.ctx.strokeStyle = "brown";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY - this.pixels * 0.25);
    this.ctx.lineTo(
      centerX + this.pixels * 0.09,
      centerY - this.pixels / 2 - 3,
    );
    this.ctx.stroke();

    // Kis levél
    this.ctx.fillStyle = "green";
    this.ctx.beginPath();
    this.ctx.ellipse(
      centerX + this.pixels * 0.2,
      centerY - this.pixels * 0.4,
      this.pixels * 0.17,
      this.pixels * 0.07,
      Math.PI / 4,
      0,
      Math.PI * 2,
    );
    this.ctx.fill();
  }
}
