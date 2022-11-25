const { expect } = require("chai");
const chai = require("chai");
const Listing = require("../src/rentit-core/Listing");
const FakeCarRepository = require("../src/repository/FakeCarRepository");
const assert = chai.assert;
const fs = require("fs");

describe("User should be able to interact with listings", () => {
  describe("User should be able to create a listing", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
      dataSet3 = JSON.parse(
        fs.readFileSync(`${__dirname}/datasets/carDataSet3.json`)
      );
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      FakeCarRep = new FakeCarRepository(dataSet1);
    });
    it("Test will pass if listing gets validated, checkforDoubeListing, and then created", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
    });
    it("Test will pass if error is thrown when creating listing that allready exists", () => {
      assert.throws(() => {
        FakeCarRep = new FakeCarRepository(dataSet1);
        const listing = new Listing();
        listing.checkForDoubleListing(dataSet3, FakeCarRep);
      });
    });
    it("Test will pass if creation of new id is generated", () => {
      FakeCarRep = new FakeCarRepository(dataSet1);
      const listing = new Listing();
      newlisting = listing.createId(dataSet2, FakeCarRep);
      assert.deepEqual(newlisting.id, 17);
    });
  });

  describe("User should be able to update a listing", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
      dataSet3 = JSON.parse(
        fs.readFileSync(`${__dirname}/datasets/carDataSet3.json`)
      );
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      dataSet4 = JSON.parse(
        fs.readFileSync(`${__dirname}/datasets/carDataSet4.json`)
      );
      FakeCarRep = new FakeCarRepository(dataSet1);
    });
    it("Test will pass if listing is updated", () => {
      const listing = new Listing();
      listing.update(dataSet4, FakeCarRep);
      assert.deepEqual(dataSet4, FakeCarRep.All[15]);
    });
  });

  describe("User should be able to Delete a listing", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
      dataSet3 = JSON.parse(
        fs.readFileSync(`${__dirname}/datasets/carDataSet3.json`)
      );
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      dataSet4 = JSON.parse(
        fs.readFileSync(`${__dirname}/datasets/carDataSet4.json`)
      );
      FakeCarRep = new FakeCarRepository(dataSet1);
    });
    it("Test will pass if listing is deleted", () => {
      const listing = new Listing();
      listing.delete(15, FakeCarRep);
      assert.deepEqual(FakeCarRep.All.length, 15);
    });
  });

  describe("User should be able to choose parameters for listing", () => {
    beforeEach(() => {
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      FakeCarRep = new FakeCarRepository(dataSet1);
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    });
    it("Test will pass if id is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.id, 17);
    });
    it("Test will pass if reg_number is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.reg_number, "BB99999");
    });
    it("Test will pass if price is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.price, 2000);
    });
    it("Test will pass if model is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.model, "Yaris");
    });
    it("Test will pass if brand is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.brand, "Toyota");
    });
    it("Test will pass if year is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.year, 2009);
    });
    it("Test will pass if location is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.location, "Slemmestad");
    });
    it("Test will pass if availability is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.availability, [12, 13, 8, 6, 5, 4]);
    });
    it("Test will pass if type is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.type, "Regular");
    });
    it("Test will pass if fuel is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.fuel, "Gas");
    });
    it("Test will pass if gear is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.gear, "Manuell");
    });
    it("Test will pass if km_limit is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.km_limit, 800);
    });
    it("Test will pass if extras is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.extras, []);
    });
    it("Test will pass if price_per_km_after_limit is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.price_per_km_after_limit, 5);
    });
    it("Test will pass if owner is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.owner, 12);
    });
  });
});

describe("User needs to choose parameters for listing", () => {
  describe("check for required listing validation", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    });
    it("Test will pass if id is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.id = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if reg_number is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.reg_number = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if price is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.price = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if model is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.model = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if location is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.location = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if availability is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.availability = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("Test will pass if owner is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.owner = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
  });
});
