import { Request, Response } from 'express';
import CarService from '../Services/Cars';

class Cars {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }
  async createCar(req: Request, res: Response) {
    const registerCar = await this.service.createCar(req.body);
    return res.status(201).json(registerCar);
  }
}

export default Cars;