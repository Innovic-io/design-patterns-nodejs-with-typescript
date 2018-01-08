import { AudioPlayer } from "./adapter";
import { AUDIO_FORMAT_TYPE, buildOutput, UNSUPPORTED_TYPE_ERROR } from "./suporting.classes";

describe("Describing Audio Adapter", () => {

  let audioPlayer: AudioPlayer;

  beforeAll(() => {
    audioPlayer = new AudioPlayer();
  });

  it("should play mp3", () => {
    const songName = "Californication.mP3";
    const output = audioPlayer.play(songName);

    expect(output).toBe(buildOutput(AUDIO_FORMAT_TYPE.MP3, songName));
  });

  it("should play mp4", () => {
    const songName = "Around the world.Mp4";
    const output = audioPlayer.play(songName);

    expect(output).toBe(buildOutput(AUDIO_FORMAT_TYPE.MP4, songName));
  });

  it("should play Avi", () => {
    const songName = "Black mirror.avi";
    const output = audioPlayer.play(songName);

    expect(output).toBe(buildOutput(AUDIO_FORMAT_TYPE.AVI, songName));
  });

  it("should play vlc", () => {
    const songName = "Green Mile.vlc";
    const output = audioPlayer.play(songName);

    expect(output).toBe(buildOutput(AUDIO_FORMAT_TYPE.VLC, songName));
  });

  it("should throw error", () => {
    const songName = "Room.mov";
    const output = audioPlayer.play(songName);

    expect(output).toBe(UNSUPPORTED_TYPE_ERROR);
  });
});
