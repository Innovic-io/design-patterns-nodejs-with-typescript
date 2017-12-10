/*
 * https://en.wikipedia.org/wiki/Command_pattern
 */

/**
 * A command object knows about receiver and invokes a method of the receiver.
 * Values for parameters of the receiver method are stored in the command,
 * the receiver object to execute these methods is also stored in the command object by aggregation.
 */
class EngineCommand {
  constructor() {
    this.commands = []
  }

  storeAndExecute(command) {
    this.commands.push(command)

    command.execute()
  }
}

/**
 * An invoker object knows how to execute a command, and optionally does bookkeeping about the command execution.
 */
class CarInvoker {
  start () {
    console.log('start engine')
  }

  end () {
    console.log('shutdown engine')
  }
}

/**
 * The receiver then does the work when the execute() method in command is called.
 *
 * The invoker does not know anything about a concrete command, it knows only about command interface.
 */
class StartReceiver {
  constructor(car) {
    this._car = car
  }

  execute () {
    this._car.start()
  }
}

class EndReceiver {
  constructor (car) {
    this._car = car
  }

  execute() {
    this._car.end()
  }
}

// USAGE

// invoker
const car = new CarInvoker()

// receivers
const startCar = new StartReceiver(car)

const endCar = new EndReceiver(car)

// command
const engine = new EngineCommand()

engine.storeAndExecute(startCar)

engine.storeAndExecute(endCar)
