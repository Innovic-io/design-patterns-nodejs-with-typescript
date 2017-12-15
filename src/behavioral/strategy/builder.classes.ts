export enum moveStyleEnum {
  Walking = "Walk",
  Flying = "Fly",
  Swimming = "Swim",
}

export enum soundStyleEnum {
  Talking = "Talk",
  Chattering = "Sound",
  Muted = "Mute",
}

export class Walking implements IMoving {
  public getMoving(): string {
    return moveStyleEnum.Walking;
  }
}

export class Flying implements IMoving {
  public getMoving(): string {
    return moveStyleEnum.Flying;
  }
}

export class Swim implements IMoving {
  public getMoving(): string {
    return moveStyleEnum.Swimming;
  }
}

export class Talk implements ISound {
  public getSound(): string {
    return soundStyleEnum.Talking;
  }
}

export class Chatter implements ISound {
  public getSound(): string {
    return soundStyleEnum.Chattering;
  }
}

export class Muted implements ISound {
  public getSound(): string {
    return soundStyleEnum.Muted;
  }
}
