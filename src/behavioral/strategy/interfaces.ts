interface IMoving {
  getMoving(): string;
}

interface ISound {
  getSound(): string;
}

interface IBird extends IMoving, ISound {
  setSound(sound: ISound): void;

  setMovingStyle(movingStyle: IMoving): void;

  describe(): string;
}
