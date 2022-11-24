const express = require("express");
const listingController = require("./../controllers/listingController");

const router = express.Router();

router.route("/").get(listingController.getAllCars).post(listingController.createCar);
router
  .route("/:id")
  .get(listingController.getCar)
  .patch(listingController.updateCar)
  .delete(listingController.deleteCar);

module.exports = router;