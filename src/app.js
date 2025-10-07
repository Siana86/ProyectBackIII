import express from 'express';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mockingRouter from './routes/mocks.router.js';
import dotenv from "dotenv";
import connectMongoDB from './config/db.js';
import { AppError, errorHandler } from './middlewares/errorHandler.js';



dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

//Conectar a MongoDB
connectMongoDB();


// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routers
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api', mockingRouter);

//Iniciando manejo de errores
app.use(errorHandler);


export default app; 

