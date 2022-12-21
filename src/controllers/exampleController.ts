import { Request, Response } from 'express';

export const get = (req: Request, res: Response) => {
	res.statusCode = 200;
	res.json([{ example: 'This is your data from controller' }]);
}
