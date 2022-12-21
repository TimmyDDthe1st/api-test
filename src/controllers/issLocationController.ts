import { Request, Response } from 'express';
import got from 'got';
import { pipeline } from 'stream';

interface IssLocationResponse {
	timestamp: number;
	iss_position: {
		longitude: string;
		latitude: string;
	};
	message: "success";
}

export const get = async (req: Request, res: Response) => {
	const response = got.stream({
		url: 'http://api.open-notify.org/iss-now.json',
	})
	pipeline(response, res, (err) => {
		if (err) {
			res.statusCode = 500;
			res.json({ error: err.message });
		}
	})
}
