import { Shape, CircleShape, IDrawingAPI, DrawingApiA, DrawingApiB } from './bridge';

describe('Testing Bridge Pattern on ', () => {

  it('write data about circle shape', () => {

    const circle1: Shape = new CircleShape(1, 3, 5, new DrawingApiA);
    const circle2: Shape = new CircleShape(5, 7, 9, new DrawingApiB);

    circle1.draw();
    circle2.draw();
  });

  it('resize circle by percentage', () => {

    const circle: Shape = new CircleShape(2, 6, 10, new DrawingApiA);

    circle.draw();

    circle.resizeByPercentage(45.0);

    circle.draw();
  });
});
