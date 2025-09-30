/**
 * Main Express application setup.
 * @packageDocumentation
 */

import express, { Application, Request, Response } from "express";
import morgan from "morgan";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));

/**
 * Health check endpoint.
 * @route GET /health
 * @returns {string} 200 - Server is healthy
 */
app.get("/health", (req: Request, res: Response): void => {
  res.status(200).send("Server is healthy");
});

export default app;