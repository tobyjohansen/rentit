const fs = require("fs");

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../../data/cars.json`));

exports.getAllCars = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: cars.length,
    data: {
      cars,
    },
  });
};

exports.getCar = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  if (id > cars.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }

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
  if (req.params.id * 1 > cars.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      car: "Updated car",
    },
  });
};

exports.deleteCar = (req, res) => {
  if (req.params.id * 1 > cars.length) {
    return res.status(404).json({
      status: "fail",
      message: "invalid ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};
