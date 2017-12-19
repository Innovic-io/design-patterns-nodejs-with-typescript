import { ProjectileMotionFacade } from './facade';

describe('Calculating components of projectile motion', () => {
    let projectileMotion;

    beforeEach(() => {
        projectileMotion = new ProjectileMotionFacade();
    });

    it('velocity, distance and height after some time', () => {
        const result = {
            velocity: 44.014230653278496,
            height: 2.1534148827726804,
            distance: 14.919295946949042
        };

        expect(projectileMotion.calculate(13, 30, 5)).toEqual(result);
    });
});
