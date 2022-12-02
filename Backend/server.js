import express from 'express';
import './api/db/database.js'
import apiRouter from './api/routers.js';
import cors from 'cors';

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors({ origin: true }))
app.use(apiRouter);

app.listen(port,()=>{
    console.log(`Server ready port ${port}`);
}) 