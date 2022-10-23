const fs = require("fs");
const CarList = require("../models/CarList");
const Car = require("../models/Car");

const cars = new CarList(
  JSON.parse(fs.readFileSync(`${__dirname}/../../data/cars.json`))
);

exports.checkID = (req, res, next, val) => {
  console.log(`Car id is: ${val}`);
  if (req.params.id * 1 > cars.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  /* if (!req.body.model || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  } */
  next();
};

exports.getAllCars = (req, res) => {
  console.log(req.requestTime);
  console.log(cars);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: cars.carList.length,
    cars: cars.carList,
  });
};

exports.getCar = (req, res) => {
  console.log(req.params);
  // const id = req.params.id * 1;

  // const car = cars.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: cars.findCarByID(req.params.id),
  });
};

exports.createCar = (req, res) => {
  const newCar = new Car(
    cars.createID(),
    null,
    req.body.price,
    req.body.model,
    req.body.brand,
    req.body.year,
    req.body.location,
    req.body.availability,
    req.body.type,
    req.body.fuel,
    req.body.gear,
    req.body.km_limit,
    req.body.extras,
    req.body.price_per_km_after_limit,
    req.body.owner
  );

  //change this logic
  cars.carList.push(newCar.carObject);

  fs.writeFile(
    `${__dirname}/../../data/cars.json`,
    JSON.stringify(cars.carList),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          cars: newCar.jsonStringify(),
        },
      });
    }
  );
};

exports.updateCar = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      car: "Updated car",
    },
  });
};

exports.deleteCar = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
