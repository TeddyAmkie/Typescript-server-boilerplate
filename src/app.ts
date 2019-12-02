import bodyParser from "body-parser";
import express from "express";
import { NextFunction, Request, Response } from "express";
import { ExpressError } from "./Errors";
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get("/", (req: Request, res: Response, next: NextFunction) => {

  res.send("Hello world!");
});

/** 404 handler */

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  // tslint:disable-next-line:no-console
  console.error(err.stack);
  return res.json({
    message: err.message,
    status: err.status
  });
});

export default app;
