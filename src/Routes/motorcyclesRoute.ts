import express from 'express';
import MotorcycleController from '../Controllers/Motorcycles';

const router = express.Router();

const motorcycleController = new MotorcycleController();

router.post('/', (req, res, next) => motorcycleController.createMotorcycle(req, res, next));

router.get('/', (req, res, next) => motorcycleController.getAll(req, res, next));

router.get('/:id', (req, res, next) => motorcycleController.getCarById(req, res, next));

export default router;