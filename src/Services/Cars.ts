import CarsModel from '../Models/Cars';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class Cars {
  private model: CarsModel = new CarsModel();

  static createDomain(car: ICar) {
    return new Car(car);
  }

  async createCar(car: ICar) {
    const newCar = await this.model.createCar(car);
    return Cars.createDomain(newCar);
  }
}

export default Cars;