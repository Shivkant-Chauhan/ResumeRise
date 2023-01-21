// const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const globalErrorController = require("./controllers/errorController");
const AppError = require("./utils/appError");
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/api/v1/users", userRouter);

app.use(globalErrorController);

module.exports = app;
