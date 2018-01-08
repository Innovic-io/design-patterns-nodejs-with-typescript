// https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern

export enum LogLevel {
  None = 0,
  Info = 1,
  Debug = 2,
  Warning = 3,
  Error = 4,
  All = 10,
}

abstract class Logger {

  protected next: Logger;

  constructor(protected logLevel: LogLevel) {}

  public setNext(logger: Logger) {
    this.next = logger;

    return logger;
  }

  public message(msg: string, severity: LogLevel) {

    if (severity === this.logLevel || this.logLevel === LogLevel.All) {

      this.WriteMessage(msg);

    }

    if (this.next) {

      this.next.message(msg, severity);

    }
  }

  protected abstract WriteMessage(msg: string);
}

export class ConsoleLogger extends Logger {

  constructor(logLevel: LogLevel) {
    super(logLevel);
  }

  protected WriteMessage(msg: string) {

    process.stdout.write(`In Console: ${msg.toString()} \n`);
  }

}

export class EmailLogger extends Logger {

  constructor(logLevel: LogLevel) {
    super(logLevel);
  }

  protected WriteMessage(msg: string) {

    process.stdout.write(`Sending via email: ${msg.toString()}`);
  }
}

export class FileLogger extends Logger {

  constructor(logLevel: LogLevel) {
    super(logLevel);
  }

  protected WriteMessage(msg: string) {

    process.stdout.write(`Saving into file: ${msg.toString()}`);
  }
}
