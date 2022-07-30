import { Request, Response } from "express";

export const ErrorRoute = (req: Request, res: Response) => {
  const error = new Error('Not found');

    console.error(error);

    res.status(404).json({
      method: req.method,
      status: 404,
      message: `${error.message} It seems like you are got error somewhere`
    });
}