const fs = require("fs");

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../../data/cars.json`));

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
  if (!req.body.model || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};

exports.getAllCars = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: cars.length,
    cars,
  });
};

exports.getCar = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const car = cars.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      car,
    },
  });
};

exports.createCar = (req, res) => {
  /* console.log(req.body); */
  const newId = cars[cars.length - 1].id + 1;
  const newCar = Object.assign({ id: newId }, req.body);

  cars.push(newCar);

  fs.writeFile(
    `${__dirname}/../../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          cars: newCar,
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
