/*
 * https://en.wikipedia.org/wiki/Command_pattern
 */

/**
 * A command object knows about receiver and invokes a method of the receiver.
 * Values for parameters of the receiver method are stored in the command,
 * the receiver object to execute these methods is also stored in the command object by aggregation.
 */
export class EngineCommand {

  private commands = [];

  constructor() {}

  storeAndExecute(command) {

    this.commands.push(command);

    command.execute();
  }
}

/**
 * An invoker object knows how to execute a command, and optionally does bookkeeping about the command execution.
 */
export interface ICar {
  start(): void;
  end(): void;
}

export class CarInvoker implements ICar {

  private engineOn: boolean;

  start () {
    this.engineOn = true;
  }

  end () {
    this.engineOn = false;
  }

  getEngineStatus() {
    return this.engineOn;
  }
}

/**
 * The receiver then does the work when the execute() method in command is called.
 *
 * The invoker does not know anything about a concrete command, it knows only about command interface.
 */

interface Receiver {
  execute(): void;
}

export class StartReceiver<T extends ICar> implements Receiver {

  car: T;

  constructor(car: T) {
    this.car = car
  }

  execute() {
    this.car.start()
  }
}

export class EndReceiver<T extends ICar> implements Receiver {

  car: T;

  constructor (car: T) {
    this.car = car
  }

  execute() {
    this.car.end()
  }
}
