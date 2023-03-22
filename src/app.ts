import express from 'express';
import Cars from './Routes/carsRoute';

const app = express();

app.use(express.json());
app.use('/cars', Cars);

export default app;
