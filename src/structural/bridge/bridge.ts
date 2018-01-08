// Abstraction
export class Shape {
  drawingApi: IDrawingAPI;

  constructor(drawingApi: IDrawingAPI) {
    this.drawingApi = drawingApi;
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
export class DrawingApiA implements IDrawingAPI {
  public drawCircle(x: number, y: number, radius: number) {
    console.log(`DrawingApiA: (${x}, ${y}) radius = ${radius}`);
  }
}

export class DrawingApiB implements IDrawingAPI {
  public drawCircle(x: number, y: number, radius: number) {
    console.log(`DrawingApiB: (${x}, ${y}) radius = ${radius}`);
  }
}

/**
 * Refined Abstraction
 */
export class CircleShape extends Shape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(x: number, y: number, radius: number, drawingApi: IDrawingAPI) {
    super(drawingApi);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawingApi.drawCircle(this.x, this.y, this.radius);
  }

  resizeByPercentage(pct: number) {
    this.radius *= (1.0 + pct / 100.0);
  }
}
