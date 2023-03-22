import { isValidObjectId } from 'mongoose';
import CarsModel from '../Models/Cars';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import GenericError from '../Errors/GenericError';

class Cars {
  private model: CarsModel = new CarsModel();

  static createDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async createCar(car: ICar) {
    const newCar = await this.model.createCar(car);
    return Cars.createDomain(newCar);
  }

  async getCarById(id: string) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, 'Invalid mongo id');
    }
    const car = await this.model.getCarById(id);
    if (!car) {
      throw new GenericError(404, 'Car not found');
    }
    return { status: 200, message: Cars.createDomain(car) };
  }

  async getAllCars() {
    const cars = await this.model.findCar();
    const allCars = cars.map((c) => Cars.createDomain(c));
    return { status: 200, message: allCars };
  }
}

export default Cars;