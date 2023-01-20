// const mongoose = require("mongoose");
import express from "express";
import path from "path";

import userRouter from "./routes/userRouter.js";
import buildResumeRouter from "./routes/buildResumeRouter.js";
import globalErrorController from "./controllers/errorController.js";

import AppError from "./utils/appError.js";
const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.use("/api/v1/users", userRouter);
app.use("/build-resume", buildResumeRouter);


app.use(globalErrorController);

export default app;
