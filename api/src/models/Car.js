class Car {
  constructor(
    id,
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
    this.price_per_km_after_limit;
    this.price_per_km_after_limit = price_per_km_after_limit;
    this.owner = owner;
  }
}

const car = new Car(1);
console.log(car);
