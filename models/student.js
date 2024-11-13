const mongoose = require('mongoose');

//creating the student schema
const studentSchema = mongoose.Schema({
    firstname: {type :String},
    lastname: {type :String},
    school: {type:String},
    stream: {type:String}
});

// Define and export
module.exports = mongoose.model('Student', studentSchema);

