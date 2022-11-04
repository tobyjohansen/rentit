const express = require("express");
const carRouter = require("./routes/carRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

//MIDDLEWARES

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES

app.use("/api/v1/cars", carRouter);

// START SERVER

const port = 3300;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
