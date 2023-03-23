import { isValidObjectId } from 'mongoose';
import CarsModel from '../Models/Cars';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import GenericError from '../Errors/GenericError';

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

class Cars {
  private model: CarsModel = new CarsModel();

  static createDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async createCar(car: ICar) {
    const newCar = await this.model.create(car);
    return Cars.createDomain(newCar);
  }

  async getCarById(id: string) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const car = await this.model.getById(id);
    if (!car) {
      throw new GenericError(404, CAR_NOT_FOUND);
    }
    return { status: 200, message: Cars.createDomain(car) };
  }

  async updateCar(id: string, car: Partial<ICar>) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const updatedCar = await this.model.update(id, car);
    if (!updatedCar) {
      throw new GenericError(404, CAR_NOT_FOUND);
    }
    return { status: 200, message: Cars.createDomain(updatedCar) };
  }

  async getAllCars() {
    const cars = await this.model.find();
    const allCars = cars.map((c) => Cars.createDomain(c));
    return { status: 200, message: allCars };
  }

  async deleteCar(id: string) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const deletedCar = await this.model.delete(id);
    if (!deletedCar) {
      throw new GenericError(404, CAR_NOT_FOUND);
    }
    return { status: 200, message: '' };
  }
}

export default Cars;