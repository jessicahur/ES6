import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Employee = new Schema({
  name: {type: String, required: true},
  DOB: {type: Date, required: true},
  address: {type: String, require: true},
  phone: {type: String, require: true},
  position: {type: String, require: true},
  manager: Employee
});

module.exports = mongoose.model('Employee', Employee);
