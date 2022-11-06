const chai = require("chai");
const assert = chai.assert;
const fs = require("fs");

const FakeCarRepository = require("../src/repository/FakeCarRepository");

describe("Testing car Repository", () => {
  beforeEach(() => {
    dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
    FakeCarRep = new FakeCarRepository(dataSet1);
  });

  it("getting_list_of_all_cars", () => {
    assert.deepEqual(FakeCarRep.All, dataSet1);
  });

  it("Getting_car_by_id", () => {
    const carById = FakeCarRep.getById(2);
    assert.deepEqual(carById, dataSet1[1]);
  });

  it("Create_new_car", () => {
    dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    const result = FakeCarRep.create(dataSet2);
    check = FakeCarRep.All.push(result);
    assert.deepEqual(result, dataSet2);
  });

  it("Update_a_car", () => {
    dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    const result = FakeCarRep.update(4, dataSet2);
    assert.deepEqual(result, dataSet2);
  });
});
