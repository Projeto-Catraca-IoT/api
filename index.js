import express from 'express';
import {router as test} from './routes/test.js';
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json());

// Use test route
app.use('/', test);

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`The server is running on ${SERVER_PORT}`);
});