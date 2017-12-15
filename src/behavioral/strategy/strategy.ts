export class Bird implements IBird {

  private soundType: ISound;
  private moveType: IMoving;

  public getMoving(): string {

    return this.moveType.getMoving();
  }

  public getSound(): string {

    return this.soundType.getSound();
  }

  public setSound(sound: ISound): void {

    this.soundType = sound;
  }

  public setMovingStyle(movingStyle: IMoving): void {

    this.moveType = movingStyle;
  }

  public describe(): string {
    return `${this.getMoving()} and ${this.getSound()}`;
  }

}
