const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuidv1 = require('uuid/v1');

const fs = require("fs");


const app = express();


app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());


app.post("/cars", (req, res) => {
  const carsList = readJSONFile();
  const newCar = req.body;
  newCar.id = uuidv1();
  const newCarList = [...carsList, newCar];
  writeJSONFile(newCarList);
  res.json(newCar);
});


app.get("/cars/:id", (req, res) => {
  const carsList = readJSONFile();
  const id = req.params.id;
  let idFound = false;
  let foundCar;

  carsList.forEach(car => {
    if (id == car.id) {
      idFound = true;
      foundCar = car
    }
  });

  if (idFound) {
    res.json(foundCar);
  } else {
    res.status(404).send(`Car ${id} was not found`);
  }
});


app.get("/cars", (req, res) => {
  const carsList = readJSONFile();
  res.json(carsList);
});


app.put("/cars/:id", (req, res) => {
  let carsList = readJSONFile();
  let id = req.params.id;
  let newCar = req.body;
  newCar.id = id;
  idFound = false;

  const newCarsList = carsList.map((car) => {
     if (car.id == id) {
       idFound = true;
       return newCar
     }
    return car
  })
  
  writeJSONFile(newCarsList);

  if (idFound) {
    res.json(newCar);
  } else {
    res.status(404).send(`Car ${id} was not found`);
  }

});


app.delete("/cars/:id", (req, res) => {
    const dogsList = readJSONFile();
    const id = req.params.id;
    const newDogsList = dogsList.filter((dog) => dog.id != id)
  
    if (dogsList.length !== newDogsList.length) {
      res.status(200).send(`Dog ${id} was removed`);
      writeJSONFile(newDogsList);
    } else {
      res.status(404).send(`Dog ${id} was not found`);
    }
  });


function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["cars"];
}


function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ cars: content }),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);