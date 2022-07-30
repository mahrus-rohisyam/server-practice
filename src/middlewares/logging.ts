import { NextFunction, Request, Response } from "express";

export const Logging = (req: Request, res: Response, next: NextFunction) => {
  /** Log the req */
  console.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
  res.on('finish', () => {
    /** Log the res */
    console.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
  });

  next();
}