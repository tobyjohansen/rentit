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
  getIdByRegnumber(reg_number) {
    this.carList = this.All;
    let id = null;
    this.carList.forEach((car) => {
      if (reg_number == car.reg_number) {
        id = car.id;
      }
    });
    return id;
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
    this.db.save(this.carList);
  }

  delete(id) {
    this.carList = this.All;
    delete this.carList[id - 1];

    const newCarList = this.carList.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }

      return false;
    });

    this.carList = newCarList;

    this.db.save(this.carList);
  }
}

module.exports = CarRepository;
