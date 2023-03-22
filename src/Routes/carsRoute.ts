import express, { Request, Response } from 'express';
import CarsController from '../Controllers/Cars';

const router = express.Router();

const carsController = new CarsController();

router.post('/', (req: Request, res: Response) => carsController.createCar(req, res));

router.get('/', (req: Request, res: Response) => carsController.getAll(req, res));

router.get('/:id', (req, res, next) => carsController.getCarById(req, res, next));

export default router;