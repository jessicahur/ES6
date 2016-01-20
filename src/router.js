import express from 'express';
import bodyParser from 'body-parser';
//connect to mongoose and open a connection to the test database on local MongoDB
import mongoose from 'mongoose';

const db = mongoose.connection;
const router = express.Router();

//close connection after finish: mongoose.connection.close()

function connectDB(callback) {
  mongoose.connect('mongodb://localhost/test');
  db.on('error', console.error.bind(console, 'connection error '));
  db.once('open', () => {
    callback();
  })
}

router.get('/', function(req, res, next) {

});
