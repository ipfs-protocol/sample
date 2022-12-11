import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express, { Application, Request, Response, NextFunction } from 'express';

const app:Application = express();

(() => {
  const result = dotenv.config({ path: path.join(__dirname, "cfg", ".env") });
  if (result.parsed == undefined) throw new Error("Cannot loaded environment variables file.");  
})();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
	origin: allowedOrigins,
	credentials: true,
};

app.use(morgan('dev'));
app.use(cors(options));
app.use('/', express.static(path.join(__dirname, '..', 'zmoda')));
app.use('/user/signup', express.static(path.join(__dirname, '..', 'zmoda')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
import inRouter from './inRouter'; app.use('/', inRouter);

// 404
app.all('*', (req: Request, res:Response) => {
	res.status(404);
	if(req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'page', '404.html'))
	} else if(req.accepts('json')) {
		res.json({ error: "404 Not Found" });
	} else {
		res.type('txt').send("404 Not Found")
	}
});

// ERROR
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message:err.message });
});

// Listen
app.listen(process.env.APP_PORT, () => {
  console.log(`http://localhost:${ process.env.APP_PORT }`);
});