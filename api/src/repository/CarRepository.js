class CarRepository {
  db = null;
  constructor(db) {
    this.db = db;
  }
  get All() {
    return this.db.read();
  }
  getById(id) {
    const carId = id * 1;
    const car = this.All.find((el) => el.id === carId);
    return car;
  }

  create(car) {
    this.carList = this.All;
    this.carList.push(car);
    this.db.save(this.carList);
  }

  update(id, car) {
    let values = Object.keys(car);

    values.forEach((value) => {
      if (car[value] != null && car[value].length != 0) {
        this.db[id - 1][value] = car[value];
      }
    });
    return this.db[id - 1];
  }
}

module.exports = CarRepository;
