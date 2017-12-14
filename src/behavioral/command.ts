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

  public storeAndExecute(command) {

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

  public start() {
    this.engineOn = true;
  }

  public end() {
    this.engineOn = false;
  }

  public getEngineStatus() {
    return this.engineOn;
  }
}

/**
 * The receiver then does the work when the execute() method in command is called.
 *
 * The invoker does not know anything about a concrete command, it knows only about command interface.
 */

interface IReceiver {
  execute(): void;
}

export class StartReceiver<T extends ICar> implements IReceiver {

  public car: T;

  constructor(car: T) {
    this.car = car;
  }

  public execute() {
    this.car.start();
  }
}

export class EndReceiver<T extends ICar> implements IReceiver {

  public car: T;

  constructor(car: T) {
    this.car = car;
  }

  public execute() {
    this.car.end();
  }
}
