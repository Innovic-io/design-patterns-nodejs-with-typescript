import { Shape, CircleShape, IDrawingAPI, DrawingApi } from './bridge';

describe('Testing Bridge Pattern on ', () => {

  it('write data about shape', () => {

    const myShape: Shape = new CircleShape(1, 2, 7, new DrawingApi());

    myShape.draw();
  });
});
