import '@babel/polyfill';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';

const app: Express = express();

// Middlewares.
app.use(helmet());

app.get('*', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

const PORT: number = 5001;

app.listen(PORT, () => {
  console.log(
    `Bismillah Ar-Rehman Ar-Rahim \n App is up and running on http://localhost:${PORT}`
  );
});
