const { expect } = require("chai");
const chai = require("chai");
const Listing = require("../src/rentit-core/Listing");
const FakeCarRepository = require("../src/repository/FakeCarRepository");
const assert = chai.assert;
const fs = require("fs");

describe("Testing listing operations", () => {
  describe("Test for creation of a listing", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
      dataSet3 = JSON.parse(fs.readFileSync(`${__dirname}/datasets/carDataSet3.json`));
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      FakeCarRep = new FakeCarRepository(dataSet1);
    });
    it("Test creating a listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
    });
    it("Test checking for regnumber allready used", () => {
      assert.throws(() => {
        FakeCarRep = new FakeCarRepository(dataSet1);
        const listing = new Listing();
        listing.checkForDoubleListing(dataSet3, FakeCarRep);
      });
    });
    it("Test creation of ID on new listings", () => {
      FakeCarRep = new FakeCarRepository(dataSet1);
      const listing = new Listing();
      newlisting = listing.createId(dataSet2, FakeCarRep);
      assert.deepEqual(newlisting.id, 17);
    });
  });
  describe("Test parameters are accepted into listing", () => {
    beforeEach(() => {
      dataSet1 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet1.json`));
      FakeCarRep = new FakeCarRepository(dataSet1);
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    })
    it("Test id is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.id, 17);
    })
    it("Test regnumber is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.regnumber, "BB99999");
    })
    it("Test price is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.price, 2000);
    })
    it("Test model is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.model, "Yaris");
    })
    it("Test brand is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.brand, "Toyota");
    })
    it("Test year is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.year, 2009);
    })
    it("Test location is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.location, "Slemmestad");
    })
    it("Test availability is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.availability, [12, 13, 8, 6, 5, 4]);
    })
    it("Test type is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.type, "Regular");
    })
    it("Test fuel is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.fuel, "Gas");
    })
    it("Test gear is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.gear, "Manuell");
    })
    it("Test km_limit is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.km_limit, 800);
    })
    it("Test extras is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.extras, []);
    })
    it("Test price_per_km_after_limit is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.price_per_km_after_limit, 5);
    })
    it("Test owner is accepted into listing", () => {
      const listing = new Listing();
      listing.create(dataSet2, FakeCarRep);
      assert.deepEqual(listing.owner, 12);
    })
  })
});

describe("Testing listing validation", () => {
  describe("check for required listing validation", () => {
    beforeEach(() => {
      dataSet2 = JSON.parse(fs.readFileSync(`${__dirname}/carDataSet2.json`));
    });
    it("Check id is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.id = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check regnumber is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.regnumber = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check price is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.price = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check model is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.model = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check location is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.location = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check availability is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.availability = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
    it("check owner is required in validation", () => {
      assert.throws(() => {
        const listing = new Listing();
        dataSet2.owner = null;
        listing.validateRequiredListing(dataSet2);
      });
    });
  });
});
