import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../../domain';

interface ErrorResponse {
  status: string;
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
}

export function errorHandler(err: Error | HttpException, req: Request, res: Response, next: NextFunction) {
  let status = 'error';
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof HttpException) {
    statusCode = err.statusCode;
    message = err.message;
  } else {
    console.error('Unexpected error:', err);
  }

  const errorResponse: ErrorResponse = {
    status,
    statusCode,
    message,
    timestamp: new Date().toISOString(),
    path: req.url,
  };

  res.status(statusCode).json(errorResponse);
}
