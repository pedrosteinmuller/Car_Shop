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

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getAllMotorcycles();
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async getMotorcycleById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.getMotorcyclesById(id);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async updateMotorcycle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.updateMotorcycles(id, req.body);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default Motorcycles;