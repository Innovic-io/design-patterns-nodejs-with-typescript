import { Chatter, Flying, moveStyleEnum, Muted, soundStyleEnum, Swim, Talk, Walking } from "./builder.classes";

type SOUND_TYPE = soundStyleEnum | ISound;
type MOVING_TYPE = moveStyleEnum | IMoving;

export class Bird implements IBird {
  private soundType: ISound;
  private moveType: IMoving;

  constructor(typeOfSound: SOUND_TYPE = soundStyleEnum.Chattering, typeOfMoving: MOVING_TYPE = new Flying()) {
    this.setSound(typeOfSound);
    this.setMovingStyle(typeOfMoving);
  }

  public getMoving(): string {
    return this.moveType.getMoving();
  }

  public getSound(): string {
    return this.soundType.getSound();
  }

  public setSound(sound: SOUND_TYPE): void {
    if (typeof sound === "object") {
      this.soundType = sound;
      return;
    }
    switch (sound) {
      case soundStyleEnum.Chattering:
        this.soundType = new Chatter();
        break;

      case soundStyleEnum.Muted:
        this.soundType = new Muted();
        break;

      case soundStyleEnum.Talking:
        this.soundType = new Talk();
        break;

      default:
        throw Error("Not found");
    }
  }

  public setMovingStyle(movingStyle: MOVING_TYPE): void {
    if (typeof movingStyle === "object") {
      this.moveType = movingStyle;
      return;
    }
    switch (movingStyle) {
      case moveStyleEnum.Swimming:
        this.moveType = new Swim();
        break;

      case moveStyleEnum.Flying:
        this.moveType = new Flying();
        break;

      case moveStyleEnum.Walking:
        this.moveType = new Walking();
        break;

      default:
        throw Error("Not found");
    }
  }

  public describe(): string {
    return `${this.getMoving()} and ${this.getSound()}`;
  }

}
