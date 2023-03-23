import express from 'express';
import MotorcycleController from '../Controllers/Motorcycles';

const router = express.Router();

const motorcycleController = new MotorcycleController();

router.post('/', (req, res, next) => motorcycleController.createMotorcycle(req, res, next));

router.get('/', (req, res, next) => motorcycleController.getAll(req, res, next));

router.get('/:id', (req, res, next) => motorcycleController.getMotorcycleById(req, res, next));

router.put('/:id', (req, res, next) => motorcycleController.updateMotorcycle(req, res, next));

router.delete('/:id', (req, res, next) => motorcycleController.deletedMotorcycle(req, res, next));

export default router;