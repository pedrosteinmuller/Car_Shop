import express, { Request, Response } from 'express';
import CarsController from '../Controllers/Cars';

const router = express.Router();

const carsController = new CarsController();

router.post('/', (req: Request, res: Response) => carsController.createCar(req, res));

export default router;