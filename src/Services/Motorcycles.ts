import { isValidObjectId } from 'mongoose';
import MotorcyclesModel from '../Models/Motorcycles';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import GenericError from '../Errors/GenericError';

const INVALID_MONGO_ID = 'Invalid mongo id';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

class Motorcycless {
  private model: MotorcyclesModel = new MotorcyclesModel();

  static createDomain(motorcycles: IMotorcycles | null) {
    if (motorcycles) {
      return new Motorcycles(motorcycles);
    }
    return null;
  }

  async createMotorcycles(motorcycles: IMotorcycles) {
    const newMotorcycles = await this.model.create(motorcycles);
    return Motorcycless.createDomain(newMotorcycles);
  }

  async getMotorcyclesById(id: string) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const motorcycles = await this.model.getById(id);
    if (!motorcycles) {
      throw new GenericError(404, MOTORCYCLE_NOT_FOUND);
    }
    return { status: 200, message: Motorcycless.createDomain(motorcycles) };
  }

  async updateMotorcycles(id: string, motorcycles: Partial<IMotorcycles>) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const updatedMotorcycles = await this.model.update(id, motorcycles);
    if (!updatedMotorcycles) {
      throw new GenericError(404, MOTORCYCLE_NOT_FOUND);
    }
    return { status: 200, message: Motorcycless.createDomain(updatedMotorcycles) };
  }

  async getAllMotorcycles() {
    const motorcycless = await this.model.find();
    const allMotorcycless = motorcycless.map((c) => Motorcycless.createDomain(c));
    return { status: 200, message: allMotorcycless };
  }

  async deleteMotorcycle(id: string) {
    if (!isValidObjectId(id)) {
      throw new GenericError(422, INVALID_MONGO_ID);
    }
    const deletedCar = await this.model.delete(id);
    if (!deletedCar) {
      throw new GenericError(404, MOTORCYCLE_NOT_FOUND);
    }
    return { status: 200, message: '' };
  }
}

export default Motorcycless;