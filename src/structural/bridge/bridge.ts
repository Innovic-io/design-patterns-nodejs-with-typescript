// Abstraction
export class Shape {
  public drawingApi: DrawingApi;

  constructor(_drawingApi: DrawingApi) {
    this.drawingApi = _drawingApi;
  }

  public draw(): void {}
  public resizeByPercentage(pct: number): void {}
}

// Implementor
export interface IDrawingAPI {
  drawCircle(x: number, y: number, radius: number);
}

/**
 * ConcreteImplementor
 */
export class DrawingApi implements IDrawingAPI {
  public drawCircle(x: number, y: number, radius: number) {
    console.log(`DrawingApi: (${x}, ${y}) radius = ${radius}`);
  }
}

/**
 * Refined Abstraction
 */
export class CircleShape extends Shape {
  x: number;
  y: number;
  radius: number;

  constructor(_x: number, _y: number, _radius: number, drawingApi: DrawingApi) {
    super(drawingApi);
    this.x = _x;
    this.y = _y;
    this.radius = _radius;
  }

  draw() {
    this.drawingApi.drawCircle(this.x, this.y, this.radius);
  }

  resizeByPercentage(pct: number) {
    this.radius *= (1.0 + pct / 100);
  }
}
