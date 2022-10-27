const { expect } = require("chai");
const chai = require("chai");
const assert = chai.assert;

const Car = require("../src/models/Car");

const carObj1 = new Car(
  1,
  null,
  10,
  "Miray",
  "Toyota",
  1998,
  "Oslo",
  [1, 2, 4, 9],
  "Personbil",
  "Bensin",
  "Automat",
  600,
  ["Hengerfeste"],
  2,
  8
);

describe("Testing Creation of Car object", () => {
  describe("Check for input validation", () => {
    it("Testing validation for id", () => {
      assert.throws(() => {
        carObj1.checkFormValidation(null, "Toyota", 3500);
      });
    });
    it("Testing validation for model", () => {
      assert.throws(() => {
        carObj1.checkFormValidation(12, null, 3500);
      });
    });
    it("Testing validation for price", () => {
      assert.throws(() => {
        carObj1.checkFormValidation(12, "Toyota", null);
      });
    });
  });
  describe("Testing Car Output", () => {
    it("Testing if car output to object works", () => {
      const car = {
        id: 1,
        price: 10,
        model: "Miray",
        brand: "Toyota",
        year: 1998,
        location: "Oslo",
        availability: [1, 2, 4, 9],
        type: "Personbil",
        fuel: "Bensin",
        gear: "Automat",
        km_limit: 600,
        extras: ["Hengerfeste"],
        price_per_km_after_limit: 2,
        owner: 8,
      };

      assert.deepEqual(carObj1.carObject, car);
    });
    it("Testing if car outputs to json", () => {
      const car = {
        id: 1,
        price: 10,
        model: "Miray",
        brand: "Toyota",
        year: 1998,
        location: "Oslo",
        availability: [1, 2, 4, 9],
        type: "Personbil",
        fuel: "Bensin",
        gear: "Automat",
        km_limit: 600,
        extras: ["Hengerfeste"],
        price_per_km_after_limit: 2,
        owner: 8,
      };

      assert.deepEqual(carObj1.jsonStringify(), JSON.stringify(car));
    });
  });
});
