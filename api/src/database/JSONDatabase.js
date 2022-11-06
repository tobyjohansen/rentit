const fs = require("fs");

class JSONDatabase {
  save(data) {
    fs.writeFile(`${__dirname}/../../data/cars.json`, JSON.stringify(data));
  }
  read(path) {
    return JSON.parse(fs.readFileSync(path));
  }
}

module.exports = JSONDatabase;
