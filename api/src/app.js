const express = require("express");
const carRouter = require("./routes/carRoutes");

const app = express();

//STINE PRØVER SEG PÅ ENDEPUNKTER
app.get("/hello", (req, res) => res.send("Hello World!"));
app.get("/learning", (req, res) => res.send("Learning how backend works!"));

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
