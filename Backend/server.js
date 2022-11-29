import express from 'express';
import apiRouter from './api/routers.js';
import cors from 'cors';
import * as dotenv from 'dotenv';
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(cors({ origin: true }))
app.use(apiRouter);

app.listen(port,()=>{
    console.log(`Server ready port ${port}`);
}) 