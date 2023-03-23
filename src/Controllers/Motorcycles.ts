import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/Motorcycles';

class Motorcycles {
  private service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }
  async createMotorcycle(req: Request, res: Response, next: NextFunction) {
    try {
      const registerCar = await this.service.createMotorcycles(req.body);
      return res.status(201).json(registerCar);
    } catch (error) {
      next(error);
    }
  }
}

export default Motorcycles;