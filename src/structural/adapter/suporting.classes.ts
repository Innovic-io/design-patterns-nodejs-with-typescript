import { IAdvancedMediaPlayer, IMediaPlayer } from "./interfaces";

export const UNSUPPORTED_TYPE_ERROR = "Unsupported type";

export enum AUDIO_FORMAT_TYPE {
  MP3 = "mp3",
  MP4 = "mp4",
  VLC = "vlc",
  AVI = "avi",
}

export function buildOutput(fileFormat: AUDIO_FORMAT_TYPE, fileName: string) {

  return `Now playing${fileFormat}:${fileName}`;
}

class VlcPlayer implements IAdvancedMediaPlayer {

  playMusic(fileName: string): string {
    return buildOutput(AUDIO_FORMAT_TYPE.VLC, fileName);
  }
}

class MP4Player implements IAdvancedMediaPlayer {

  playMusic(fileName: string): string {
    return buildOutput(AUDIO_FORMAT_TYPE.MP4, fileName);
  }
}

class AviPlayer implements IAdvancedMediaPlayer {

  playMusic(fileName: string): string {
    return buildOutput(AUDIO_FORMAT_TYPE.AVI, fileName);
  }
}

export class MediaAdapter implements IMediaPlayer {
  private advancedPlayer: IAdvancedMediaPlayer;

  constructor(fileName: string) {

    switch (fileName.substring(fileName.lastIndexOf(".") + 1).toLocaleLowerCase()) {

      case AUDIO_FORMAT_TYPE.VLC:
        this.advancedPlayer = new VlcPlayer();
        break;

      case AUDIO_FORMAT_TYPE.AVI:
        this.advancedPlayer = new AviPlayer();
        break;

      case AUDIO_FORMAT_TYPE.MP4:
        this.advancedPlayer = new MP4Player();
        break;

      default:
        throw new Error(UNSUPPORTED_TYPE_ERROR);
    }
  }

  play(fileName: string): string {
    return this.advancedPlayer.playMusic(fileName);
  }
}
