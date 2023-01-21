import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors);
import handler from './pages/api/generate-pdf';
// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// let handler = require("./pages/api/generate-pdf");

// dotenv.config({ path: "./config.env" });
// const app = require("./app");

// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );

// console.log(DB);

// mongoose
//   .connect(DB, {
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false
//   })
//   .then(() => console.log("DB connection successful!"));


app.post("/api/generate-pdf", async(req, res) => {
  console.log("chl rha h");

  // const pdf = await handler(req, res);
  // console.log(pdf, "shiv");
  // res.send(pdf);
});

const port = 8181;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
