// https://en.wikipedia.org/wiki/Factory_method_pattern
interface IVehicle {

  getName(): string
  getDescription(): string;
  setNumberOfSeats(seats: number): IVehicle;
  getNumberOfSeats(): number;
  setName(name: string): IVehicle;
}

class Truck implements IVehicle {
  private typeOfVehicle: string;
  private numberOfSeats: number;

  constructor(numberOfSeats = 5, vehicleName = 'Truck') {
    this
      .setNumberOfSeats(numberOfSeats)
      .setName(vehicleName);
  }

  getName(): string {
    return this.typeOfVehicle;
  }

  setName(name: string): IVehicle {
    this.typeOfVehicle = name;
    return this;
  }

  getDescription(): string {
    return `You are driving ${this.getName()} and it has ${this.getNumberOfSeats()} seats.`;
  }

  setNumberOfSeats(seats: number) {
    this.numberOfSeats = seats;
    return this;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Van implements IVehicle {
  typeOfVehicle: string;
  numberOfSeats: number;

  constructor(numberOfSeats = 20, vehicleName = 'Van') {
    this.setNumberOfSeats(numberOfSeats)
      .setName(vehicleName);
  }

  getName(): string {
    return this.typeOfVehicle;
  }

  setName(name: string): IVehicle {
    this.typeOfVehicle = name;
    return this;
  }

  getDescription(): string {
    return `You are driving ${this.getName()} and it has ${this.getNumberOfSeats()} seats.`;
  }

  setNumberOfSeats(seats: number) {
    this.numberOfSeats = seats;
    return this;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

class Car implements IVehicle {
  private typeOfVehicle: string;
  private numberOfSeats: number;

  constructor(numberOfSeats = 4, vehicleName = 'Car') {
    this
      .setNumberOfSeats(numberOfSeats)
      .setName(vehicleName);
  }

  getName(): string {
    return this.typeOfVehicle;
  }

  setName(name: string): IVehicle {
    this.typeOfVehicle = name;
    return this;
  }

  getDescription(): string {
    return `You are driving ${this.getName()} and it has ${this.getNumberOfSeats()} seats.`;
  }

  setNumberOfSeats(seats: number) {
    this.numberOfSeats = seats;
    return this;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

class Bus implements IVehicle {
  private typeOfVehicle: string;
  private numberOfSeats: number;

  constructor(numberOfSeats = 55, vehicleName = 'Bus') {
    this
      .setNumberOfSeats(numberOfSeats)
      .setName(vehicleName);
  }

  getName(): string {
    return this.typeOfVehicle;
  }

  setName(name: string): IVehicle {
    this.typeOfVehicle = name;
    return this;
  }

  getDescription(): string {
    return `You are driving ${this.getName()} and it has ${this.getNumberOfSeats()} seats.`;
  }

  setNumberOfSeats(seats: number) {
    this.numberOfSeats = seats;
    return this;
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

abstract class VehicleAbstractFactory {
  private vehicleSeats: number;
  private vehicleName: string;

  constructor(seats?: number, name?: string) {

    this.BuildVehicle(seats, name);
    this.vehicleSeats = seats;
    this.vehicleName = name;

    return this;
  }
  protected abstract BuildVehicle(seats?: number, newVehicleName?: string): IVehicle;

  GetVehicle(): IVehicle {
    return this.BuildVehicle(this.vehicleSeats, this.vehicleName);
  }
}

export class CarFactory extends VehicleAbstractFactory {

  protected BuildVehicle(seats?: number, name?: string): IVehicle {

    return new Car(seats, name);
  }
}

export class VanFactory extends VehicleAbstractFactory {

  protected BuildVehicle(seats?: number, name?: string): IVehicle {

    return new Van(seats, name);
  }
}

export class TruckFactory extends VehicleAbstractFactory {
  protected BuildVehicle(seats?: number, name?: string): IVehicle {
    return new Truck(seats, name);
  }
}

export class BusFactory extends VehicleAbstractFactory {
  protected BuildVehicle(seats?: number, name?: string): IVehicle {

    return new Bus(seats, name);
  }
}
