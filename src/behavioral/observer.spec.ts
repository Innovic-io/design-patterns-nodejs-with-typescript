import { Observer } from "./observer";

describe("Observer", () => {

  it("test observer", (done) => {

    const message = "Hello world";
    const channel = "stream";
    const observer = new Observer();

    observer.on(channel, (data) => {

      expect(data).toBe(message);
      done();
    });

    observer.emit(channel, message);
  });
});
