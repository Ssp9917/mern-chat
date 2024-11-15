import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import dbConfig from './db/connectToMongoDb.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'

const app = express();

const port = process.env.PORT || 6002;

// middleware
dotenv.config()
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// connect to mongodb
dbConfig()


//   import routes here
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/user',userRoutes)


app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});