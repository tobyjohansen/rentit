class CarRepository {
  db = null;
  path = null;
  constructor(db, path) {
    this.db = db;
    this.path = path;
  }
  get All() {
    return this.db.read(this.path);
  }
  getById(id) {
    const carId = id * 1;
    const carList = this.db.read(this.path);
    const car = carList.find((el) => el.id === carId);
    return car;
  }

  create(car) {
    this.db.save(car);
  }

  update(id, car) {
    let values = Object.keys(car);

    values.forEach((value) => {
      if (car[value] != null && car[value].length != 0) {
        this.db[id - 1][value] = car[value];
      }
    });
    return this.mock[id - 1];
  }
}

module.exports = CarRepository;
