import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
	status: string;
	statusCode: number;
	message: string;
	timestamp: string;
	path: string;
}

export function transformResponse(req: Request, res: Response, next: NextFunction) {
	const originalJson = res.json;

	res.json = function (data: any) {
		if (typeof data === 'object') {
			const { status, statusCode, message } = data as ErrorResponse;
			const transformedData: ErrorResponse = {
				status: status || 'success',
				statusCode: statusCode || res.statusCode,
				message: message || 'OK',
				timestamp: new Date().toISOString(),
				path: req.url,
			};

			return originalJson.call(res, transformedData);
		}

	};

	next();
}
