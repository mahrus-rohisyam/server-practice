import express from "express";
import mongoose from "mongoose";
import { Config } from "./config";
import { userRouter } from "./routes";
import cors from 'cors'
import { ErrorRoute, Logging, RulesApi } from "./middlewares";

const app = express();

mongoose
  .connect(String(Config.mongourl))
  .then(() => {
    console.info('Mongo connected successfully.');
    startServer()
  })
  .catch((e) => {
    console.error(e);
  });

const startServer = () => {
  /** Log the request */
  app.use(Logging);
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ credentials: true, origin: String(Config.origin) }))
  app.use(express.json());
  // app.use(RulesApi);

  /** Routes */
  app.use('/user', userRouter)

  /** Healthcheck */
  app.get('/api/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

  app.use(ErrorRoute)

  app.listen(Config.port, () => console.info(`Server is running on port ${Config.port}`));
}

// startServer()