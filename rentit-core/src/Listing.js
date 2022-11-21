class Listing {
  id = null;
  owner = null;
  renter = null;
  car = null;

  constructor(id, owner, renter, car) {
    this.id = id;
    this.owner = owner;
    this.renter = renter;
    this.car = car;
  }

  get Id() {
    return this.id;
  }

  get Owner() {
    return this.owner;
  }

  get renter() {
    return this.renter;
  }

  get car() {
    return this.car;
  }
}
