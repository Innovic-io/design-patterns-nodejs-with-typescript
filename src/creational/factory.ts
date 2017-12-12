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

  constructor(numberOfSeats = 5, vehicleName: string = CarEnum.Truck) {
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

class Van implements IVehicle {
  private typeOfVehicle: string;
  private numberOfSeats: number;

  constructor(numberOfSeats = 20, vehicleName:string = CarEnum.Van) {
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

class Sedan implements IVehicle {
  private typeOfVehicle: string;
  private numberOfSeats: number;

  constructor(numberOfSeats = 4, vehicleName: string = CarEnum.Sedan) {

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

  constructor(numberOfSeats = 55, vehicleName:string = CarEnum.Bus) {

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
  protected abstract create(type: CarEnum): IVehicle;
}

export enum CarEnum {
  Sedan = 'Sedan',
  Van = 'Van',
  Truck = 'Truck',
  Bus = 'Bus'
}

export class CarFactory extends VehicleAbstractFactory {

  create(type: CarEnum, numberOfSeats?: number, name?: string) {

    switch (type) {
      case CarEnum.Sedan:
        return new Sedan(numberOfSeats, name);

      case CarEnum.Bus:
        return new Bus(numberOfSeats, name);

      case CarEnum.Van:
        return new Van(numberOfSeats, name);

      case CarEnum.Truck:
        return new Truck(numberOfSeats, name);
      default:
        break;
    }
  }
}
