import express from 'express';
import ErrorHandle from './Middlewares/ErrorHandle';
import Cars from './Routes/carsRoute';

const app = express();

app.use(express.json());
app.use('/cars', Cars);
app.use(ErrorHandle.handle);

export default app;
