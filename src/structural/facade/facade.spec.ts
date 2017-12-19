import { ProjectileMotionFacade } from './facade';

describe('Calculating components of projectile motion', () => {
  let projectileMotion;

  beforeEach(() => {
    projectileMotion = new ProjectileMotionFacade();
  });

  it('velocity, distance and height after some time', () => {
    const mock = {
      initialVelocity: 13,
      angle: 30,
      time: 5,
      result: {
        velocity: 44.014230653278496,
        height: 2.1534148827726804,
        distance: 14.919295946949042
      }
    };

    expect(projectileMotion.calculate(mock.initialVelocity, mock.angle, mock.time)).toEqual(mock.result);
  });
});
