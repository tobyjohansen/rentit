const fs = require("fs");
const CarList = require("../models/CarList");
const Car = require("../models/Car");

const JSONDatabase = require("../database/JSONDatabase");
const CarRepository = require("../repository/CarRepository");
const Listing = require("../rentit-core/listing");

//Initialising Database and Repository
const jsonData = new JSONDatabase();
const carRep = new CarRepository(jsonData);

const cars = new CarList(carRep.All);

exports.getAllCars = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: cars.carList.length,
    cars: carRep.All,
  });
};

exports.getCar = (req, res) => {
  if (carRep.getById(req.params.id) != "Could not find car") {
    res.status(200).json({
      status: "success",
      data: carRep.getById(req.params.id),
    });
  } else {
    res.status(400).json({
      status: "fail",
      msg: "Invalid Id",
    });
  }
};

exports.createCar = (req, res) => {
  try {
    const listing = new Listing();
    listing.create(req.body, carRep);

    res.status(201).json({
      status: "success",
      data: {
        cars: "Test",
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      msg: "missing field",
      field: err,
    });
  }
};

exports.updateCar = (req, res) => {
  console.log(req.body);
  console.log(typeof req.body.gear);
  const newCar = new Car(
    req.params.id,
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

  console.log(newCar.carObject);
  cars.updateCar(req.params.id, newCar);

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

exports.deleteCar = (req, res) => {
  console.log(req.params.id);
  cars.removeCar(req.params.id);

  fs.writeFile(
    `${__dirname}/../../data/cars.json`,
    JSON.stringify(cars.carList),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          cars: cars.carList,
        },
      });
    }
  );
};
