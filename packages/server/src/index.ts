import '@babel/polyfill';
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import Logger from '@evo/logger';
import { getRenderableComponent } from '@evo/core/src/renderer/renderer';

const app: Express = express();

// Middlewares.
app.use(helmet());

app.get('*', async (req: Request, res: Response) => {
  const { Component, props } = await getRenderableComponent(req.path);
  Logger.debug('Componets - ', Component);
  res.status(200).json({ message: 'Hello World!' });
});

const PORT: number = 5001;

app.listen(PORT, () => {
  Logger.info(
    `Bismillah Ar-Rehman Ar-Rahim \n App is up and running on http://localhost:${PORT}`
  );
});
