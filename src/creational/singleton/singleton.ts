export class Singleton {
  private static singleton;
  private random: Number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): Singleton {

    if (!this.singleton) {
      this.singleton = new Singleton();
    }

    return this.singleton;
  }
}
