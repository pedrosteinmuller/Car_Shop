import express from 'express';
import CarsController from '../Controllers/Cars';

const router = express.Router();

const carsController = new CarsController();

router.post('/', (req, res, next) => carsController.createCar(req, res, next));

router.get('/', (req, res, next) => carsController.getAll(req, res, next));

router.get('/:id', (req, res, next) => carsController.getCarById(req, res, next));

router.put('/:id', (req, res, next) => carsController.updateCar(req, res, next));

router.delete('/:id', (req, res, next) => carsController.deletedCar(req, res, next));

export default router;