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

  removeCar(carID) {
    delete this.carList[carID - 1];

    const newCarList = this.carList.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }

      return false;
    });

    this.carList = newCarList;
  }

  updateCar(carID, newCarObj) {
    let values = Object.keys(newCarObj);

    values.forEach((value) => {
      if (newCarObj[value] != null) {
        this.carList[carID - 1][value] = newCarObj[value];
      }
    });

    //this.carList[carID - 1] = newCarObj;
  }
}

module.exports = CarList;
