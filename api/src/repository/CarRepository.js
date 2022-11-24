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
    this.carList = this.All;

    values.forEach((value) => {
      if (car[value] != null && car[value].length != 0) {
        this.carList[id - 1][value] = car[value];
      }
    });
    //return this.All[id - 1];
    this.db.save(this.carList);
  }
}

module.exports = CarRepository;
