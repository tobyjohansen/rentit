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
  describe("constructor", () => {
    it("Constructor contains right value", () => {
      const test = 1 + 2;
    });
    it("Testing class creation", () => {});
  });
});
