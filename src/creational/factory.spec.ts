import { CarEnum, CarFactory } from "./factory";

describe("Factory", () => {
  let factory;
  beforeEach(() => {
    factory = new CarFactory();
  });

  it("should build car", () => {
    const car = factory.create(CarEnum.Sedan);

    expect(car.getNumberOfSeats()).toEqual(4);
    expect(car.getName()).toEqual("Sedan");

  });

  it("should build van", () => {
    const van = factory.create(CarEnum.Van);

    expect(van.getNumberOfSeats()).toEqual(20);
    expect(van.getName()).toEqual("Van");

  });

  it("should build van with 10 seats", () => {
    const van = factory.create(CarEnum.Van, 10);

    expect(van.getNumberOfSeats()).toEqual(10);
    expect(van.getName()).toEqual("Van");

  });

  it("should build bus with 25 seats and named minibus", () => {
    const bus = factory.create(CarEnum.Bus, 25, "Mini Bus");

    expect(bus.getNumberOfSeats()).toEqual(25);
    expect(bus.getName()).toEqual("Mini Bus");

  });

  it("should build truck", () => {
    const van = factory.create(CarEnum.Truck);

    expect(van.getNumberOfSeats()).toEqual(5);
    expect(van.getName()).toEqual("Truck");
  });

  it("should build bus", () => {
    const bus = factory.create(CarEnum.Bus);

    expect(bus.getNumberOfSeats()).toEqual(55);
    expect(bus.getName()).toEqual("Bus");
  });
});
