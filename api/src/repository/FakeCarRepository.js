class FakeCarRepository {
  constructor(mock) {
    this.db = mock;
  }

  get All() {
    return this.db;
  }

  getById(id) {
    const carId = id * 1;
    const car = this.All.find((el) => el.id === carId);
    return car;
  }

  create(car) {
    this.db.push(car);
    return this.db[Object.keys(this.db).pop()];
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

module.exports = FakeCarRepository;
