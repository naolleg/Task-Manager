import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import appRouter from './src/route/index.js';

app.use('/api', appRouter);

app.get('/', (req, res, next) => {
  return res.send('server is working');
});

const PORT = parseInt(process.env.PORT || '3000');
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log("in app ts");
  console.log(`server is running on http://${HOST}:${PORT}`);
});
