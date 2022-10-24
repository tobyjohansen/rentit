class CarList {
  constructor(carList) {
    this.carList = carList;
  }

  findCarByID(id) {
    const carId = id * 1;
    const car = this.carList.find((el) => el.id === carId);
    if (car != null && car !== undefined) {
      return car;
    } else {
      return null;
    }
  }

  createID() {
    const newId = this.carList[this.carList.length - 1].id + 1;
    return newId;
  }

  assigneID(obj) {
    const newCar = Object.assign({ id: this.createID() }, obj);
    console.log(newCar);
    return newCar;
  }

  removeCar(carID) {
    delete this.carList[carID];

    const newCarList = this.carList.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }

      return false;
    });

    this.carList = newCarList;
  }
}

module.exports = CarList;
