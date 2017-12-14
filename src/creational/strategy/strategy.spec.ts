import {Chatter, Flying, moveStyleEnum, Muted, soundStyleEnum, Swim, Talk, Walking} from "./builder.classes";
import { Bird } from "./strategy";

describe("Strategy pattern", () => {
  let bird: Bird;
  beforeEach(() => {
    bird = new Bird();
  });

  it("should make flying bird which chatter", () => {

    expect(bird.getSound()).toBe("Sound");
    expect(bird.getMoving()).toBe("Fly");
  });

  it("should make bird which cannot fly", () => {
    bird.setMovingStyle(moveStyleEnum.Walking);

    expect(bird.getMoving()).toBe("Walk");
  });

  it("should make mute bird", () => {
    bird.setSound(new Muted());

    expect(bird.getSound()).toBe("Mute");
  });

  it("should make flying, then swimming bird", () => {
    bird.setMovingStyle(new Flying());

    expect(bird.getMoving()).toBe("Fly");

    bird.setMovingStyle(moveStyleEnum.Swimming);
    expect(bird.getMoving()).toBe("Swim");
  });

  it("should make talking, then mute walking bird", () => {
    bird.setSound(soundStyleEnum.Talking);

    expect(bird.getMoving()).toBe("Fly");
    expect(bird.getSound()).toBe("Talk");

    bird.setMovingStyle(moveStyleEnum.Walking);
    bird.setSound(new Muted());
    expect(bird.getMoving()).toBe("Walk");
    expect(bird.getSound()).toBe(soundStyleEnum.Muted);
  });

  it("should make walking bird and checked with enum", () => {
    bird.setMovingStyle(new Walking());

    expect(bird.getMoving()).toBe(moveStyleEnum.Walking);
    expect(bird.getSound()).toBe(soundStyleEnum.Chattering);
  });

  it("should make chattering flying bird", () => {
    bird = new Bird(new Chatter(), moveStyleEnum.Flying);

    expect(bird.getMoving()).toBe("Fly");
    expect(bird.getSound()).toBe(soundStyleEnum.Chattering);
  });
});
