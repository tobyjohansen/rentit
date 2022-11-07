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
        listing.checkForDoubleListing(dataSet2, FakeCarRep);
      });
    });
    it("Test creation of ID on new listings", () => {
      FakeCarRep = new FakeCarRepository(dataSet1);
      const listing = new Listing();
      newlisting = listing.createId(dataSet2, FakeCarRep);
      assert.deepEqual(newlisting.id, 17);
    });
  });
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
