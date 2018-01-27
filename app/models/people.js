let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let peopleSchema = new Schema(
  {
    name: {type: String, required: true}
  },
  {
    versionKey: false
  }
);

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('people', peopleSchema);
