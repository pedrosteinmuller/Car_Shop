import { NextFunction, Request, Response } from 'express';
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

  async getAll(req: Request, res: Response) {
    const { status, message } = await this.service.getAllCars();
    return res.status(status).json(message);
  }

  async getCarById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.getCarById(id);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default Cars;