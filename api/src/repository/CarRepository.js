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

  create(car) {}
}

module.exports = CarRepository;
