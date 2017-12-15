import { Flying, moveStyleEnum, Muted, soundStyleEnum, Swim, Talk, Walking } from "./builder.classes";
import { Bird } from "./strategy";

describe("Strategy pattern", () => {

  let bird: Bird;

  beforeEach(() => {
    bird = new Bird();
  });

  it("should create object", () => {

    expect(bird).toBeDefined();
  });

  it("should make bird which cannot fly", () => {
    bird.setMovingStyle(new Walking());

    expect(bird.getMoving()).toBe(moveStyleEnum.Walking);
  });

  it("should make mute bird", () => {
    bird.setSound(new Muted());

    expect(bird.getSound()).toBe(soundStyleEnum.Muted);
  });

  it("should make flying, then swimming bird", () => {
    bird.setMovingStyle(new Flying());

    expect(bird.getMoving()).toBe(moveStyleEnum.Flying);

    bird.setMovingStyle(new Swim());
    expect(bird.getMoving()).toBe(moveStyleEnum.Swimming);
  });

  it("should make talking, then mute walking bird", () => {
    bird.setSound(new Talk());

    expect(bird.getSound()).toBe(soundStyleEnum.Talking);

    bird.setMovingStyle(new Walking());
    bird.setSound(new Muted());
    expect(bird.getMoving()).toBe(moveStyleEnum.Walking);
    expect(bird.getSound()).toBe(soundStyleEnum.Muted);
  });

  it("should make walking bird and checked with enum", () => {
    bird.setMovingStyle(new Walking());

    expect(bird.getMoving()).toBe(moveStyleEnum.Walking);
  });

});
