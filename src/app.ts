import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
//p: app.use('/api/v1/students', StudentRoutes);
app.use('api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('testing the server hellow guys');
};

app.get('/', test);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
