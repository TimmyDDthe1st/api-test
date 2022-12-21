import express from "express";
import exampleRoute from './routes/example';
import getIssLocationRoute from './routes/getIssLocation';

const app = express();
const port = 8080;

app.use('/example', exampleRoute);

app.use('/issdistance', getIssLocationRoute)

app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${port}`);
});
