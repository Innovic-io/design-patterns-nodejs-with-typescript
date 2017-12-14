interface IMoving {
  getMoving(): string;
}

interface ISound {
  getSound(): string;
}

interface IBird {
  getSound(): string;
  setSound(sound: ISound): void;

  getMoving(): string;
  setMovingStyle(movingStyle: IMoving): void;

  describe(): string;
}
