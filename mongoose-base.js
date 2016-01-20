//connect to mongoose and open a connection to the test database on local MongoDB
import mongoose from 'mongoose';
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');

//gets notified when error occurs
db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function() {
  //connected

});
