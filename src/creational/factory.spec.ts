import { BusFactory, CarFactory, TruckFactory, Van, VanFactory } from "./factory";

describe('Vehicle Builder', () => {

  it('should build car', () => {
    const car = new CarFactory();

    expect(car.GetVehicle().getNumberOfSeats()).toEqual(4);
    expect(car.GetVehicle().getName()).toEqual('Car');

  });

  it('should build van', () => {
    const van = new VanFactory();

    expect(van.GetVehicle().getNumberOfSeats()).toEqual(20);
    expect(van.GetVehicle().getName()).toEqual('Van');

  });

  it('should build van with 10 seats', () => {
    const van = new VanFactory(10);

    expect(van.GetVehicle().getNumberOfSeats()).toEqual(10);
    expect(van.GetVehicle().getName()).toEqual('Van');

  });

  it('should build bus with 25 seats and named minibus', () => {
    const van = new BusFactory(25, 'Mini Bus');

    expect(van.GetVehicle().getNumberOfSeats()).toEqual(25);
    expect(van.GetVehicle().getName()).toEqual('Mini Bus');

  });

  it('should build truck', () => {
    const van = new TruckFactory();

    expect(van.GetVehicle().getNumberOfSeats()).toEqual(5);
    expect(van.GetVehicle().getName()).toEqual('Truck');
  });


  it('should build bus', () => {
    const bus = new BusFactory();

    expect(bus.GetVehicle().getNumberOfSeats()).toEqual(55);
    expect(bus.GetVehicle().getName()).toEqual('Bus');
  });

});
