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

    this.db = this.carList;
  }
}

module.exports = FakeCarRepository;
