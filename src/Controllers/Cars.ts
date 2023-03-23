import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Cars';

class Cars {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }
  async createCar(req: Request, res: Response, next: NextFunction) {
    try {
      const registerCar = await this.service.createCar(req.body);
      return res.status(201).json(registerCar);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.getAllCars();
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
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

  async updateCar(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.updateCar(id, req.body);
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default Cars;