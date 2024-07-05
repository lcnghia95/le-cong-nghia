import { Request, Response, NextFunction } from 'express';

interface SuccessResponse {
  status: string;
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
  method: string;
  data?: any;
}

export function transformResponse(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json;

  res.json = function (data: any) {
    if (![200, 201].includes(res.statusCode)) {
      return originalJson.call(res, data);
    }

    const transformedData: SuccessResponse = {
      status: 'success',
      statusCode: res.statusCode,
      message: 'OK',
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      method: req.method,
      data,
    };

    return originalJson.call(res, transformedData);
  };

  next();
}
