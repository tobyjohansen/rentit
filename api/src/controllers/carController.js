const fs = require("fs");
const CarList = require("../models/CarList");
const Car = require("../models/Car");

const cars = new CarList(
  JSON.parse(fs.readFileSync(`${__dirname}/../../data/cars.json`))
);

exports.getAllCars = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: cars.carList.length,
    cars: cars.carList,
  });
};

exports.getCar = (req, res) => {
  if (cars.findCarByID(req.params.id) != "Could not find car") {
    res.status(200).json({
      status: "success",
      data: cars.findCarByID(req.params.id),
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
    //cars.carList.push(newCar.carObject);
    cars.createCar(newCar.carObject);

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
