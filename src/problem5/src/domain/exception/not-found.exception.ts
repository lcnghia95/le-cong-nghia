import { HttpException } from "../base";

export class NotFoundException extends HttpException {
	constructor(message = 'Not Found') {
		super(message, 404);
	}
}