const fs = require("fs");

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
      return "Could not find car";
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
}

module.exports = CarList;
