const fs = require("fs");

class JSONDatabase {
  path = `${__dirname}/../../data/cars.json`;
  save(data) {
    fs.writeFile(this.path, JSON.stringify(data));
  }
  read() {
    return JSON.parse(fs.readFileSync(this.path));
  }
}

module.exports = JSONDatabase;
