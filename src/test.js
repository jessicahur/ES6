'use strict';
const express = require('express');
const bodyParser = require('body-parser');
//connect to mongoose and open a connection to the test database on local MongoDB

const Employee = require('../model/Employee');

const db = mongoose.connection;
const router = express.Router();

router.use(bodyParser.json());

//close connection after finish: mongoose.connection.close()

mongoose.connect('mongodb://localhost/test');
db.on('error', err => {
  console.log(err);
  db.close();
});

function connectDB(callback) {
  // mongoose.connect('mongodb://localhost/test');
  // db.on('error', console.error.bind(console, 'connection error '));
  db.once('open', () => {
    console.log('CONNECTED');
    callback();
  });
}


connectDB(() => {
  console.log('CONNECTED');
    var newEmployee = new Employee({
      name: "Jim Bob Mananger",
      DOB: new Date(0),
      address: "123",
      phone: "456",
      position: "position",
      manager: {

      }
    });

    newEmployee.save();
    console.log('SAVE');
    Employee.find({}, (err, employees) => {
      console.log(employees);
    })

});

