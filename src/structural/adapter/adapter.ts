import { AUDIO_FORMAT_TYPE, buildOutput, MediaAdapter } from "./suporting.classes";
import { IMediaPlayer } from "./interfaces";

export class AudioPlayer implements IMediaPlayer {
  private mediaAdapter: MediaAdapter;

  play(fileName: string): string {

    try {

      switch (fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase()) {

        case AUDIO_FORMAT_TYPE.MP3:

          return buildOutput(AUDIO_FORMAT_TYPE.MP3, fileName);

        default:

          this.mediaAdapter = new MediaAdapter(fileName);
          return this.mediaAdapter.play(fileName);
      }

    } catch (error) {

      return error.message;
    }
  }
}
