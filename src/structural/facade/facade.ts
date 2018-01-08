class Converter {

  public static toRad(value: number): number {
    return value * (Math.PI / 180);
  }
}

const GRAVITY = 9.81;

class Displacement {

  public horizontal(initialVelocity: number, time: number, angle: number): number {

    return initialVelocity * time * Math.cos(Converter.toRad(angle));
  }

  public vertical(initialVelocity: number, time: number, angle: number): number {

    return (initialVelocity * time * Math.sin(Converter.toRad(angle))) - ((GRAVITY * Math.pow(time, 2)) / 2);
  }

  public magnitude(horizontal: number, vertical: number): number {

    return Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertical, 2));
  }
}

class Velocity {

  public initialVelocity(x: number, y: number, angle: number): number {

    return Math.sqrt((Math.pow(x, 2) * GRAVITY) / ((x * Math.sin(2 * Converter.toRad(angle))) - (2 * y * Math.pow(Math.cos(Converter.toRad(angle)), 2))));
  }

  public xDirection(initialVelocity: number, angle: number): number {

    return initialVelocity * Math.cos(Converter.toRad(angle));
  }

  public yDirection(initialVelocity: number, angle: number, time: number): number {

    return (initialVelocity * Math.sin(Converter.toRad(angle))) - (GRAVITY * time);
  }

  public magnitude(xDirection: number, yDirection: number): number {

    return Math.sqrt(Math.pow(xDirection, 2) + Math.pow(yDirection, 2));
  }
}

class Time {
  public total(initialVelocity: number, angle: number): number {

    return (2 * initialVelocity * Math.sin(Converter.toRad(angle))) / GRAVITY;
  }

  public heightPoint(initialVelocity: number, angle: number): number {

    return (initialVelocity * Math.sin(Converter.toRad(angle))) / GRAVITY;
  }
}

class Height {

  public get(initialVelocity: number, angle: number): number {

    return (Math.pow(initialVelocity, 2) * Math.pow(Math.sin(Converter.toRad(angle)), 2)) / (2 * GRAVITY);
  }
}

class Distance {

  public get(initialVelocity: number, angle: number): number {

    return (Math.pow(initialVelocity, 2) * Math.sin(2 * Converter.toRad(angle))) / GRAVITY;
  }
}

export interface IProjectileMotion {
  velocity: number;
  height: number;
  distance: number;
}

export class ProjectileMotionFacade {
  private displacement: Displacement;
  private velocity: Velocity;
  private time: Time;
  private height: Height;
  private distance: Distance;

  constructor() {
    this.displacement = new Displacement();
    this.velocity = new Velocity();
    this.time = new Time();
    this.height = new Height();
    this.distance = new Distance();
  }

  calculate(initialVelocity: number, angle: number, time: number): IProjectileMotion {
    const vX = this.velocity.xDirection(initialVelocity, angle);
    const vY = this.velocity.yDirection(initialVelocity, angle, time);

    return {
      velocity: this.velocity.magnitude(vX, vY),
      height: this.height.get(initialVelocity, angle),
      distance: this.distance.get(initialVelocity, angle)
    }
  }
}
