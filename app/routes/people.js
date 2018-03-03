let mongoose = require('mongoose');
let people = require('../models/people');

/*
 * GET /api/people route to retrieve all the people.
 */
function getPeople(req, res) {
    //Query the DB and if no errors, send all the People
    let query = people.find({});
    query.exec((err, people) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(people);
    });
}

/*
* GET /api/people/:name
*/
function getPerson(req, res) {
    console.log(req.params.name);

    let query = people.findOne({"name":req.params.name});
    query.exec((err, people) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(people);
    });
}

/*
 * POST /api/people to save a new person.
 */
function postPerson(req,res) {
  //new person
  var newPerson = new people(req.body);

  newPerson.save((err,people) => {
    if(err){
      res.send(err);
    }
    else{
      res.json({message:"Person successfully added!", people});
    }
  });
}

/*
 * PUT /api/people/:people_id
 */

//export all the functions
module.exports = { getPeople, getPerson, postPerson };
