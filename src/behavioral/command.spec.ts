import { CarInvoker, EndReceiver, EngineCommand, ICar, StartReceiver } from "./command";

describe("Command", () => {

  it("should start and stop car engine", () => {

    const car = new CarInvoker();

    // receivers
    const startCar = new StartReceiver<ICar>(car);
    const endCar = new EndReceiver<ICar>(car);

    // command
    const engine = new EngineCommand();

    engine.storeAndExecute(startCar);

    expect(car.getEngineStatus()).toBe(true);

    engine.storeAndExecute(endCar);

    expect(car.getEngineStatus()).toBe(false);

  });
});
