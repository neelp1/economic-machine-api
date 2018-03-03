//aka server.js
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let config = require('config');
let mongoose = require('mongoose');
let people = require('./app/routes/people');
let url = 'mongodb://localhost:27017/economy';
// let url = 'mongodb://localhost:27017/economy';
// var MongoClient = require('mongodb').MongoClient;
mongoose.connect(url);//can use MongoClient with mongoose, just set in options
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.json({message: "Welcome to Economics API"}));

app.route("/api/people")
    .get(people.getPeople)
    // .get(people.getPerson)
    .post(people.postPerson);


//formats: application/json or application/x-www-form-urlencoded
app.route("/api/people/:name")
    .get(people.getPerson);
    // .put(people.putPerson)
    // .detele(people.deletePerson)



// app.get('/api/money', function(req, res) {
//   res.end();
// });
//
// app.get('/api/credit', function(req, res) {
//   res.end();
// });
//
// app.get('/api/transaction', function(req, res) {
//   res.end();
// });
//
// app.get('/api/product', function(req, res) {
//   res.end();
// });
//
// app.get('/api/stock', function(req, res) {
//   res.end();
// });

// module.exports = app;
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app; // for testing
