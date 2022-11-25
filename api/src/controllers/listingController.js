const JSONDatabase = require("../database/JSONDatabase");
const CarRepository = require("../repository/CarRepository");
const Listing = require("../rentit-core/listing");

//Initialising Database and Repository
const jsonData = new JSONDatabase();
const carRep = new CarRepository(jsonData);

exports.getAllCars = (req, res) => {
  console.log("Get All listing request Done");
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: carRep.All.length,
    cars: carRep.All,
  });
};

exports.getCar = (req, res) => {
  if (carRep.getById(req.params.id) != "Could not find car") {
    console.log("Get a listing request Done");
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

    console.log("Create a listing request Done");
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
  const listing = new Listing();
  listing.update(req.body, carRep);

  console.log("Update a listing request Done");
  res.status(201).json({
    status: "success",
    data: {
      cars: "Test",
    },
  });
};

exports.deleteCar = (req, res) => {
  const listing = new Listing();
  listing.delete(req.params.id, carRep);

  console.log("Delete a listing request Done");
  res.status(201).json({
    status: "success",
    data: {
      cars: "Test",
    },
  });
};
