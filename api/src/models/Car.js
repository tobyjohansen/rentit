class Car {
  id = null;
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

  constructor(
    id,
    carList,
    price,
    model,
    brand,
    year,
    location,
    availability,
    type,
    fuel,
    gear,
    km_limit,
    extras,
    price_per_km_after_limit,
    owner
  ) {
    this.id = id;
    this.price = price;
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.location = location;
    this.availability = availability;
    this.type = type;
    this.fuel = fuel;
    this.gear = gear;
    this.km_limit = km_limit;
    this.extras = extras;
    this.price_per_km_after_limit = price_per_km_after_limit;
    this.owner = owner;

    if (carList !== null && carList !== undefined) {
      if (carList.findCarByID(id) !== "could not find car") {
        car.price = price;
        car.model = model;
        car.brand = brand;
        car.year = year;
        car.location = location;
        car.availability = availability;
        car.type = type;
        car.fuel = fuel;
        car.gear = gear;
        car.km_limit = km_limit;
        car.extras = extras;
        car.price_per_km_after_limit = price_per_km_after_limit;
        car.owner = owner;
      }
    }

    //this.checkFormValidation(id, model, price);
  }

  get carObject() {
    const car = {
      id: this.id,
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
    return car;
  }

  checkFormValidation(id, model, price) {
    const errorVal = [];
    if (id == null || model == null || price == null) {
      if (id == null) {
        errorVal.push("id");
      }

      if (model == null) {
        errorVal.push("model");
      }

      if (price == null) {
        errorVal.push("price");
      }

      throw errorVal;
    }
  }

  jsonStringify() {
    return JSON.stringify(this.carObject);
  }
}

module.exports = Car;
