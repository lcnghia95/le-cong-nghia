import { Request, Response, NextFunction } from 'express';
import { Error } from 'mongoose';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('Error caught by errorHandler middleware:', err);

  // SyntaxError handling
  if (err instanceof SyntaxError && 'body' in err && (err as any).status === 400) {
    return res.status(400).json({ error: 'Invalid JSON syntax' });
  }

  if (err instanceof Error.ValidationError) {
    // Handle Mongoose validation errors
    const validationError = err as any;
    const messages = Object.values(validationError.errors).map((val: any) => val.message);
    return res.status(400).json({ error: messages.join(', ') });
  }

  // MongoError handling (duplicate key)
  if (err.name === 'MongoError' && (err as any).code === 11000) {
    return res.status(400).json({ error: 'Duplicate key error' });
  }

  // Default internal server error handling
  return res.status(500).json({ error: 'Internal Server Error' });
}
