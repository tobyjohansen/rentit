class Listing {
  id = null;
  regnumber = null;
  price = null;
  model = null;
  brand = null;
  year = null;
  location = null;
  availability = null;
  type = null;
  fuel = null;
  gear = null;
  km_limit = null;
  extras = null;
  price_per_km_after_limit = null;
  owner = null;

  constructor() {}

  create(obj, repository) {
    obj = this.createId(obj, repository);
    this.validateRequiredListing(obj);
    this.checkForDoubleListing(obj, repository);
    this.updateListingObj(obj);
    //repository.create(obj);
  }

  update() {}

  validateRequiredListing(obj) {
    const errorVal = [];
    if (
      obj.id == null ||
      obj.regnumber == null ||
      obj.price == null ||
      obj.model == null ||
      obj.location == null ||
      obj.availability == null ||
      obj.owner == null
    ) {
      if (obj.id == null) {
        errorVal.push("id");
      }

      if (obj.regnumber == null) {
        errorVal.push("regnumber");
      }

      if (obj.price == null) {
        errorVal.push("price");
      }

      if (obj.model == null) {
        errorVal.push("model");
      }

      if (obj.location == null) {
        errorVal.push("location");
      }

      if (obj.availability == null) {
        errorVal.push("availability");
      }

      if (owner == null) {
        errorVal.push("owner");
      }

      throw errorVal;
    }
  }

  checkForDoubleListing(obj, repository) {
    const rep = repository.getById(17);
    console.log(rep);
    /* const errorVal = [];
    if (obj.regnumber === repObj.regnumber) {
      errorVal.push("Car with the same regnumber exists");
    }

    throw errorVal; */
  }

  updateListingObj(obj) {
    this.id = obj.id;
    this.regnumber = obj.regnumber;
    this.price = obj.price;
    this.model = obj.model;
    this.brand = obj.brand;
    this.year = obj.year;
    this.location = obj.location;
    this.availability = obj.availability;
    this.type = obj.type;
    this.fuel = obj.fuel;
    this.gear = obj.gear;
    this.km_limit = obj.km_limit;
    this.extras = obj.extras;
    this.price_per_km_after_limit = obj.price_per_km_after_limit;
    this.owner = obj.owner;
  }

  get listingObj() {
    const listing = {
      id: this.id,
      regnumber: this.regnumber,
      price: this.price,
      model: this.model,
      brand: this.brand,
      year: this.year,
      location: this.location,
      availability: this.availability,
      type: this.type,
      fuel: this.fuel,
      gear: this.gear,
      km_limit: this.km_limit,
      extras: this.extras,
      price_per_km_after_limit: this.price_per_km_after_limit,
      owner: this.owner,
    };
    return listing;
  }

  createId(obj, repository) {
    const repObj = repository.All;
    obj.id = Object.keys(repObj).length + 1;
    return obj;
  }

  get() {}
}

module.exports = Listing;
