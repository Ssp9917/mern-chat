import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConfig from "./db/connectToMongoDb.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";



const port = process.env.PORT || 6002;

// middleware
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from any origin
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cookieParser());

// connect to mongodb
dbConfig();

//   import routes here
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
